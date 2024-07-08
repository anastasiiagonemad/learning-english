import React, { useState, useEffect } from 'react';
import './vocabulary.css';

const Vocabulary = () => {
  const [word, setWord] = useState('');
  const [translate, setTranslate] = useState('');
  const [vocabularyList, setVocabularyList] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const storedVocabulary =
      JSON.parse(localStorage.getItem('vocabulary')) || [];
    setVocabularyList(storedVocabulary);
  }, []);

  const addToVocabulary = (e) => {
    e.preventDefault();
    if (!word.trim() || !translate.trim()) {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);

      if (!word.trim()) {
        document.getElementById('word').classList.add('error');
      }
      if (!translate.trim()) {
        document.getElementById('translate').classList.add('error');
      }
      return;
    }

    document.getElementById('word').classList.remove('error');
    document.getElementById('translate').classList.remove('error');

    let setToLS = JSON.parse(localStorage.getItem('vocabulary')) || [];
    let newWord = { word: word, translate: translate };
    setToLS.push(newWord);
    localStorage.setItem('vocabulary', JSON.stringify(setToLS));
    setVocabularyList(setToLS);
    setWord('');
    setTranslate('');
  };

  const removeFromVocabulary = (index) => {
    let updatedVocabulary = [...vocabularyList];
    updatedVocabulary.splice(index, 1);
    localStorage.setItem('vocabulary', JSON.stringify(updatedVocabulary));
    setVocabularyList(updatedVocabulary);
  };

  return (
    <div className="vocabulary">
      <div>
        <h2>Запиши выученные слова</h2>
      </div>
      {showTooltip && (
        <div className="tooltip">Пожалуйста, заполните оба поля</div>
      )}

      <div className="vocabulary-form">
        <div>
          <label htmlFor="word">Cлово</label>
          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            id="word"
            type="text"
            required
          />
        </div>
        <div className="vocabulary-arrow">
          <p>➡️</p>
        </div>
        <div>
          <label htmlFor="translate">Перевод</label>
          <input
            value={translate}
            onChange={(e) => setTranslate(e.target.value)}
            id="translate"
            type="text"
            required
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          onClick={addToVocabulary}
          className="vocabulary-save"
        >
          Записать
        </button>
      </div>
      <div className="vocabulary-list">
        <div className="vocabulary-preview">
          <p>{word.toUpperCase()}</p>
          <p>{translate.toUpperCase()}</p>
        </div>
        {vocabularyList.map((item, index) => (
          <div key={index} className="vocabulary-item">
            <p>{item.word}</p>
            <p>{item.translate}</p>
            <button onClick={() => removeFromVocabulary(index)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vocabulary;
