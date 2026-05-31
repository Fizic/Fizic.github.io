import { Navigate, Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
