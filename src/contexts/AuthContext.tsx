import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';

const API_URL = import.meta.env.VITE_API_URL;

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => void;
  authToken: string | null;
  isLoading: boolean;
  signatureRejected: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signatureRejected, setSignatureRejected] = useState(false);
  const { publicKey, signMessage, connected } = useWallet();

  const login = useCallback(async () => {
    if (!publicKey || !signMessage) {
      throw new Error('Wallet not connected!');
    }

    setIsLoading(true);
    setSignatureRejected(false);

    try {
      // 1. Get challenge from backend
      const nonceResponse = await fetch(`${API_URL}/auth/challenge`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicKey: publicKey.toBase58(),
        }),
      });
      const { message } = await nonceResponse.json();

      // 2. Sign the message
      const encodedMessage = new TextEncoder().encode(message);
      let signature;
      try {
        signature = await signMessage(encodedMessage);
      } catch (error) {
        console.log('User rejected signature request');
        setSignatureRejected(true);
        return;
      }

      // 3. Verify signature and get token
      const verifyResponse = await fetch(`${API_URL}/auth/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicKey: publicKey.toBase58(),
          signature: bs58.encode(signature),
        }),
      });

      const { token } = await verifyResponse.json();
      setAuthToken(token);
      localStorage.setItem('authToken', token);
    } catch (error) {
      console.error('Authentication failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [publicKey, signMessage]);

  const logout = useCallback(() => {
    setAuthToken(null);
    setSignatureRejected(false);
    localStorage.removeItem('authToken');
  }, []);

  // Handle wallet connection/disconnection
  useEffect(() => {
    if (connected && !authToken && !isLoading && !signatureRejected) {
      login().catch((error) => {
        if (error) {
          console.error('Login failed:', error);
        }
      });
    } else if (!connected) {
      logout();
    }
  }, [connected, authToken, login, logout, isLoading, signatureRejected]);

  // Check for existing token on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
      setAuthToken(savedToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!authToken,
        login,
        logout,
        authToken,
        isLoading,
        signatureRejected,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
