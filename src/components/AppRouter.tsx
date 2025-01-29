import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import AppContent from './AppContent'
import IndexPage from './IndexPage'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/app" element={<AppContent />} />
      </Routes>
    </Router>
  )
}
