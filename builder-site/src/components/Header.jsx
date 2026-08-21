import { NavLink } from 'react-router-dom';
import { FaHammer, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const activeClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <header className={`header ${theme === 'dark' ? 'dark' : ''}`}>
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
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          title={theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;