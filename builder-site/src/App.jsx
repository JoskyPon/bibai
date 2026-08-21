// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import CalculatorPage from "./pages/CalculatorPage";
import PortfolioPage from "./pages/PortfolioPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactsPage from "./pages/ContactsPage";

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