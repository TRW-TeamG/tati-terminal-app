import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  onComplete?: () => void;
  onTextUpdate?: () => void;
  speed?: number;
}

export default function AnimatedText({ text, onComplete, onTextUpdate, speed = 30 }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    // Reset states when text changes
    setDisplayedText('');
    setCurrentWordIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentWordIndex === 0) {
      // Immediately show first word
      setDisplayedText(words[0]);
      setCurrentWordIndex(1);
      onTextUpdate?.();
      return;
    }

    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayedText(words.slice(0, currentWordIndex + 1).join(' '));
        setCurrentWordIndex((prev) => prev + 1);
        onTextUpdate?.();
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentWordIndex, words, speed, onComplete, onTextUpdate]);

  return <span>{displayedText}</span>;
}
