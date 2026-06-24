// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/homePage';
import ServicesPage from './pages/servicesPage';
import CalculatorPage from './pages/calculatorPage';
import PortfolioPage from './pages/portfolioPage';
import ReviewsPage from './pages/revievsPage';
import ContactsPage from './pages/contactsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;