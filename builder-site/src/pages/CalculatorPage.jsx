import { useState } from 'react';

const CalculatorPage = () => {
  const [workType, setWorkType] = useState('snos-sten');
  const [area, setArea] = useState('');
  const [withGarbage, setWithGarbage] = useState(false);
  const [withMaterials, setWithMaterials] = useState(false);
  const [errors, setErrors] = useState({}); // объект с ошибками

  const calculatePrice = () => {
    const parsedArea = parseFloat(area) || 0;
    let basePrice = 0;

    switch (workType) {
      case 'snos-sten':
        basePrice = 2500;
        break;
      case 'perepan':
        basePrice = 3500;
        break;
      case 'uteplenie':
        basePrice = 2000;
        break;
      case 'otdelka':
        basePrice = 1500;
        break;
      default:
        basePrice = 0;
    }

    let total = basePrice * parsedArea;

    if (withGarbage) total += 5000;
    if (withMaterials) total *= 1.3;

    return Math.round(total);
  };

  // Валидация при отправке
  const handleSubmit = (e) => {
    e.preventDefault();

    // собираем ошибки
    const newErrors = {};
    const parsedArea = parseFloat(area);

    if (!area.trim()) {
      newErrors.area = 'Укажите площадь';
    } else if (isNaN(parsedArea) || parsedArea <= 0) {
      newErrors.area = 'Площадь должна быть положительным числом';
    }

    setErrors(newErrors);

    // если есть ошибки - не отправляем
    if (Object.keys(newErrors).length > 0) return;

    const price = calculatePrice();
    console.log('Данные калькулятора:', {
      workType,
      area,
      withGarbage,
      withMaterials,
      price,
    });
    alert(`Примерная стоимость: ${price.toLocaleString('ru-RU')} ₽\n(данные выведены в консоль)`);
  };

  return (
    <section className="page">
      <div className="container">
        <h2>Калькулятор стоимости</h2>
        <p className="subtitle">Выберите тип работы и укажите параметры — мы пришлём смету</p>
        <form className="calculator-form" onSubmit={handleSubmit}>
          {/* Тип работы */}
          <div className="form-step">
            <label htmlFor="workType">Тип работы</label>
            <select
              id="workType"
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
            >
              <option value="snos-sten">Снос стен</option>
              <option value="perepan">Перепланировка</option>
              <option value="uteplenie">Утепление балкона</option>
              <option value="otdelka">Отделка</option>
            </select>
          </div>

          {/* Площадь */}
          <div className="form-step">
            <label htmlFor="area">Площадь, м²</label>
            <input
              type="number"
              id="area"
              placeholder="Например, 15"
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
                // Очищаем ошибку при изменении поля
                if (errors.area) {
                  setErrors((prev) => ({ ...prev, area: undefined }));
                }
              }}
            />
            {errors.area && <p className="error-text">{errors.area}</p>}
          </div>

          {/* Дополнительные опции */}
          <div className="form-step">
            <label>Дополнительные опции</label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={withGarbage}
                onChange={(e) => setWithGarbage(e.target.checked)}
              />{' '}
              Вывоз мусора (+5 000 ₽)
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={withMaterials}
                onChange={(e) => setWithMaterials(e.target.checked)}
              />{' '}
              Материалы включены (+30% к стоимости)
            </label>
          </div>

          {/* Динамическая цена */}
          {area && parseFloat(area) > 0 && (
            <div className="price-preview">
              Примерная стоимость: <strong>{calculatePrice().toLocaleString('ru-RU')} ₽</strong>
            </div>
          )}

          <button type="submit" className="btn btn-primary">Получить расчёт</button>
        </form>
      </div>
    </section>
  );
};

export default CalculatorPage;