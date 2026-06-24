// src/pages/ContactsPage.jsx
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactsPage = () => {
  return (
    <section className="page">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contacts-layout">
          <form className="contact-form">
            <input type="text" placeholder="Ваше имя" />
            <input type="tel" placeholder="Телефон" />
            <textarea placeholder="Опишите задачу..."></textarea>
            <button className="btn btn-primary">Отправить заявку</button>
          </form>
          <div className="contact-info">
            <p><FaPhone /> +7 (999) 123-45-67</p>
            <p><FaEnvelope /> stroiprofi@mail.ru</p>
            <p><FaMapMarkerAlt /> г. Москва, ул. Строителей, 10</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;