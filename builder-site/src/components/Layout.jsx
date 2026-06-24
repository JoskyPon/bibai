// src/components/Layout.jsx
import Header from './header'; 
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;