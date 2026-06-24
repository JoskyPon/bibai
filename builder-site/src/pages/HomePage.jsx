// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  const benefits = [
    'Более 10 лет опыта',
    'Работаем по договору',
    'Соблюдаем сроки',
    'Доступные цены',
  ];

  return (
    <section className="hero">
      <div className="container">
        <h1>Строительные работы любой сложности</h1>
        <p className="hero__subtitle">
          Снос и возведение стен, перепланировка, утепление балконов, отделка — всё в одних руках.
        </p>
        <ul className="benefits">
          {benefits.map((item, idx) => (
            <li key={idx}><FaCheckCircle className="icon" /> {item}</li>
          ))}
        </ul>
        <div className="hero__actions">
          <Link to="/calculator" className="btn btn-primary">
            Рассчитать стоимость <FaArrowRight />
          </Link>
          <Link to="/services" className="btn btn-outline">Все услуги</Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;