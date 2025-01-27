import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import AppContent from './AppContent';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/app" element={<AppContent />} />
      </Routes>
    </Router>
  );
}
