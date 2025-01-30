import { Toaster } from 'react-hot-toast'

import './App.css'
import AppRouter from './components/AppRouter'

function App() {
  return (
    <>
      <AppRouter />
      <Toaster
        containerStyle={{
          top: 40,
          left: 40,
          bottom: 40,
          right: 40,
        }}
        toastOptions={{
          className: 'font-montserrat',
          duration: 5000,
          style: {
            background: '#1E2A3A',
            color: '#F5F5F5',
          },
        }}
      />
    </>
  )
}

export default App
