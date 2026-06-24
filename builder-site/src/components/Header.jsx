// src/components/Header.jsx
import { NavLink } from 'react-router-dom';
import { FaHammer } from 'react-icons/fa';

const Header = () => {
  const activeClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="logo">
          <FaHammer /> СтройПрофи
        </NavLink>
        <nav>
          <NavLink to="/services" className={activeClass}>Услуги</NavLink>
          <NavLink to="/calculator" className={activeClass}>Калькулятор</NavLink>
          <NavLink to="/portfolio" className={activeClass}>Портфолио</NavLink>
          <NavLink to="/reviews" className={activeClass}>Отзывы</NavLink>
          <NavLink to="/contacts" className={activeClass}>Контакты</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;