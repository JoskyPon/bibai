import { useState } from 'react';
import Modal from '../components/Modal';

// Временные данные проектов (можно дополнить полями description, images)
const projects = [
  {
    id: 1,
    category: 'perepan',
    image: 'https://placehold.co/400x250/EEE/999?text=До+и+После',
    title: 'Перепланировка 2-комнатной',
    description: 'Снос перегородки между кухней и гостиной, создание просторной студии. Работы выполнены за 14 дней.',
    images: [
      'https://placehold.co/400x250/EEE/999?text=Фото+1',
      'https://placehold.co/400x250/EEE/999?text=Фото+2',
    ],
  },
  {
    id: 2,
    category: 'uteplenie',
    image: 'https://placehold.co/400x250/EEE/999?text=Утепление+балкона',
    title: 'Утепление балкона в хрущёвке',
    description: 'Полное утепление минеральной ватой, отделка вагонкой, установка тёплого пола. Балкон превращён в кабинет.',
    images: [
      'https://placehold.co/400x250/EEE/999?text=До',
      'https://placehold.co/400x250/EEE/999?text=После',
    ],
  },
  {
    id: 3,
    category: 'snos',
    image: 'https://placehold.co/400x250/EEE/999?text=Снос+стены',
    title: 'Объединение кухни и гостиной',
    description: 'Демонтаж несущей стены с усилением проёма металлоконструкцией. Согласование перепланировки включено.',
    images: [
      'https://placehold.co/400x250/EEE/999?text=Процесс',
      'https://placehold.co/400x250/EEE/999?text=Результат',
    ],
  },
  {
    id: 4,
    category: 'perepan',
    image: 'https://placehold.co/400x250/EEE/999?text=Проект+4',
    title: 'Перепланировка студии',
    description: 'Разработка дизайн-проекта и реализация: перенос мокрой зоны, монтаж новых перегородок.',
  },
  {
    id: 5,
    category: 'uteplenie',
    image: 'https://placehold.co/400x250/EEE/999?text=Балкон+под+ключ',
    title: 'Балкон под ключ',
    description: 'Остекление, утепление, отделка панелями ПВХ, освещение.',
  },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null); // для модалки

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="page">
      <div className="container">
        <h2>Портфолио</h2>

        {/* Кнопки фильтров */}
        <div className="filter-buttons">
          {['all', 'perepan', 'uteplenie', 'snos'].map((cat) => (
            <button
              key={cat}
              className={`btn-filter ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' && 'Все'}
              {cat === 'perepan' && 'Перепланировка'}
              {cat === 'uteplenie' && 'Утепление балкона'}
              {cat === 'snos' && 'Снос стен'}
            </button>
          ))}
        </div>

        {/* Сетка проектов */}
        <div className="grid grid--portfolio">
          {filteredProjects.map((proj) => (
            <div
              className="portfolio-card"
              key={proj.id}
              onClick={() => openModal(proj)}
              style={{ cursor: 'pointer' }}
            >
              <img src={proj.image} alt={proj.title} />
              <p>{proj.title}</p>
            </div>
          ))}
        </div>

        {/* Модальное окно */}
        <Modal isOpen={!!selectedProject} onClose={closeModal}>
          {selectedProject && (
            <div className="modal-body">
              <h3>{selectedProject.title}</h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
              />
              <p>{selectedProject.description || 'Подробное описание появится позже.'}</p>
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="modal-gallery">
                  {selectedProject.images.map((img, idx) => (
                    <img key={idx} src={img} alt={`${selectedProject.title} ${idx + 1}`} />
                  ))}
                </div>
              )}
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default PortfolioPage;