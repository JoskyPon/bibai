// src/pages/ServicesPage.jsx
import { FaHardHat, FaRulerCombined, FaThermometerHalf, FaPaintRoller } from 'react-icons/fa';

const services = [
  { icon: <FaHardHat />, title: 'Снос и возведение стен', desc: 'Демонтаж старых перегородок, монтаж новых из кирпича, блоков, гипсокартона.' },
  { icon: <FaRulerCombined />, title: 'Перепланировка', desc: 'Согласование, разработка проекта, перенос стен, дверных проёмов.' },
  { icon: <FaThermometerHalf />, title: 'Утепление балконов', desc: 'Теплоизоляция, остекление, отделка «под ключ».' },
  { icon: <FaPaintRoller />, title: 'Отделочные работы', desc: 'Штукатурка, шпатлёвка, поклейка обоев, покраска, укладка плитки.' },
];

const ServicesPage = () => {
  return (
    <section className="page">
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="grid">
          {services.map((s, i) => (
            <div className="card" key={i}>
              <div className="card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;