import React, { useState } from 'react';
import { Card } from './Card';
import '../styles/card.css';
import '../styles/buttons.css';

const words = [
  {
    english: 'Horse',
    transcription: '[ hɔːs ]',
    russian: 'Лошадь',
  },
  {
    english: 'Hedgehog',
    transcription: '[ˈhedʒ(h)ɒɡ]',
    russian: 'Ёж',
  },
  {
    english: 'Сat',
    transcription: '[cat]',
    russian: 'Кошка',
  },
  {
    english: 'Dad',
    transcription: '[dæd]',
    russian: 'Отец',
  },
  {
    english: 'Brilliant',
    transcription: '[ˈbrilyənt]',
    russian: 'Блестящий',
  },
  {
    english: 'Flower',
    transcription: '[ˈflaʊər]',
    russian: 'Цветок',
  },
  {
    english: 'Girl',
    transcription: '[ɡɜːl]',
    russian: 'Девочка',
  },
  {
    english: 'Rode',
    transcription: '[rōd]',
    russian: 'Дорогa',
  },
  {
    english: 'Fly',
    transcription: '[ flai ]',
    russian: 'Летать',
  },
  {
    english: 'Pilot',
    transcription: '[ˈpailət]',
    russian: 'Пилот',
  },
  {
    english: 'Hospital',
    transcription: '[ ˈhɔspitl ]',
    russian: 'Больница',
  },
  {
    english: 'Estate',
    transcription: '[ isˈteit ]',
    russian: 'Поместье, имущество, сословие',
  },
  {
    english: 'Apartment',
    transcription: '[ əˈpɑ:tmənt ]',
    russian: 'Квартира',
  },
  {
    english: 'Bakery',
    transcription: '[ ˈbeikəri ]',
    russian: 'Пекарня',
  },
  {
    english: 'Temple',
    transcription: '[ templ ]',
    russian: 'Храм',
  },
  {
    english: 'Church',
    transcription: ' [ʧə:ʧ ]',
    russian: 'Церковь',
  },
  {
    english: 'Dentist',
    transcription: '[ ˈdentist ]',
    russian: 'Зубной врач',
  },
  {
    english: 'Doctor',
    transcription: '[ ˈdɔktə ]',
    russian: 'Доктор',
  },
  {
    english: 'Nurse',
    transcription: ' nə:s ]',
    russian: 'Няня',
  },
  {
    english: 'Cup',
    transcription: '[ kʌp ]',
    russian: 'Чашка',
  },
  {
    english: 'Glass',
    transcription: '[ glɑ:s ]',
    russian: 'Стакан, бокал',
  },
  {
    english: 'Сupboard',
    transcription: '[ ˈkʌbəd ]',
    russian: 'Буфет',
  },
  {
    english: 'Plate',
    transcription: '[ pleit ]',
    russian: 'Тарелка',
  },
  {
    english: 'Saucepan',
    transcription: '[ ˈsɔ:spən ]',
    russian: 'Кастрюля',
  },
  {
    english: 'Jug',
    transcription: '[ ʤʌg ]',
    russian: 'Кувшин',
  },
  {
    english: 'Kettle',
    transcription: '[ ketl ]',
    russian: 'Чайник',
  },
  {
    english: 'Sink',
    transcription: '[ siŋk ]',
    russian: 'Тонуть',
  },
  {
    english: 'Knife',
    transcription: '[ naif ]',
    russian: 'Нож',
  },
];

function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleNoButtonClick = () => {
    setShowTranslation(true);
  };

  const handleYesButtonClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setShowTranslation(false);
  };

  return (
    <div className="cards-items">
      <div className="card-translater">
        <div>
          <Card {...words[currentIndex]} />
        </div>
        <div>
          {showTranslation && (
            <p className="translation">{words[currentIndex].russian}</p>
          )}
        </div>
      </div>

      <div className="card-buttons">
        <button className="no" onClick={handleNoButtonClick}>
          Don't know
        </button>
        <button className="remaining">Remaining Cards</button>
        <button className="yes" onClick={handleYesButtonClick}>
          Know
        </button>
      </div>
    </div>
  );
}

export { Cards };
