import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container">
        <p>© 2025 СтройПрофи. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;