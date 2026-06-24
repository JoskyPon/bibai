// src/pages/ReviewsPage.jsx
import { FaStar } from 'react-icons/fa';

const reviews = [
  { name: 'Анна', rating: 5, text: 'Очень довольна перепланировкой! Бригада аккуратная, сдали даже раньше срока.' },
  { name: 'Сергей', rating: 5, text: 'Утеплили балкон — теперь там тёплый кабинет. Рекомендую.' },
  { name: 'Мария', rating: 4, text: 'Хорошая работа, небольшие задержки по материалам, но всё компенсировали.' },
];

const ReviewsPage = () => {
  return (
    <section className="page">
      <div className="container">
        <h2>Отзывы клиентов</h2>
        <div className="grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-card__stars">
                {Array.from({ length: r.rating }, (_, idx) => <FaStar key={idx} />)}
              </div>
              <p className="review-card__text">«{r.text}»</p>
              <span className="review-card__author">— {r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;