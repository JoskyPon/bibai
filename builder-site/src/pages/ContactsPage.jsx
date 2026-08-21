import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSpinner } from 'react-icons/fa';

const ContactsPage = () => {
  // Состояния полей формы
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  // Состояние отправки
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorText, setErrorText] = useState('');

  // ВАЖНО: Замени на свой endpoint из Formspree!
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/ТВОЙ_ID';

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Простая валидация
    if (!name.trim() || !phone.trim()) {
      setStatus('error');
      setErrorText('Пожалуйста, заполните имя и телефон.');
      return;
    }

    setStatus('loading');
    setErrorText('');

    try {
      const response = await fetch('https://formspree.io/f/mjyblppl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        // Очищаем поля
        setName('');
        setPhone('');
        setMessage('');
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      setStatus('error');
      setErrorText('Не удалось отправить заявку. Попробуйте ещё раз или позвоните по телефону.');
    }
  };

  return (
    <section className="page">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contacts-layout">
          {/* Форма */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              placeholder="Опишите задачу..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {/* Статус отправки */}
            {status === 'loading' && (
              <div className="form-status">
                <FaSpinner className="spin" /> Отправка...
              </div>
            )}
            {status === 'success' && (
              <div className="form-status success">Спасибо! Ваша заявка отправлена.</div>
            )}
            {status === 'error' && (
              <div className="form-status error">{errorText}</div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Отправляется...' : 'Отправить заявку'}
            </button>
          </form>

          {/* Контактная информация */}
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