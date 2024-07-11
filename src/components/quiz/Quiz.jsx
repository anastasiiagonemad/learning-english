import React, { useState, useEffect } from 'react';
import './quiz.css';

//сделать модальное окно с переходом в словарик при окончании прохождения квиза или остаться на странице

const Quiz = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showTranslation, setShowTranslation] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    fetch('http://itgirlschool.justmakeit.ru/api/words')
      .then((response) => response.json())
      .then((data) => {
        setWords(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const answerValue = (e) => setAnswer(e.target.value);

  const handleCheckButton = (e) => {
    e.preventDefault();
    if (words && words.length > 0) {
      if (
        answer.toLowerCase() === words[currentWordIndex].russian.toLowerCase()
      ) {
        setShowTranslation(true);
        setCorrectAnswer(words[currentWordIndex].russian);
        setIsCorrect(true);
      } else {
        setShowTranslation(true);
        setCorrectAnswer(words[currentWordIndex].russian);
        setIsCorrect(false);
      }
    }
    return false;
  };

  const handleNextButton = () => {
    if (words && words.length > 0) {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
        setShowTranslation(false);
        setAnswer('');
        setCorrectAnswer('');
        setIsCorrect(false);
      } else {
        setCurrentWordIndex(0);
      }
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-title">
        <h2>Проверь свои знания!</h2>
        <p>
          Пиши перевод слова в окошке и нажимай кнопку CHECK, если слово тебе не
          знакомо - жми NEXT
        </p>
      </div>
      <div className="quiz-card">
        {loading ? (
          <p>Загрузка данных...</p>
        ) : error ? (
          <p>Произошла ошибка при загрузке данных.</p>
        ) : (
          <div>
            <p>{words[currentWordIndex].english}</p>
          </div>
        )}
      </div>
      {showTranslation && (
        <div className="quiz-tooltip">
          {isCorrect ? (
            <p className="correct-answer">🎉 Это правильный ответ 🎉</p>
          ) : (
            <p className="quiz-wrong-answer">
              Ответ неверный. Правильный ответ: <span>{correctAnswer}</span>
            </p>
          )}
        </div>
      )}

      <div className="quiz-answer">
        <input
          placeholder="Введи ответ"
          type="text"
          value={answer}
          onChange={answerValue}
        />
      </div>
      <div className="quiz-buttons">
        <button onClick={handleCheckButton}>Check</button>
        <button onClick={handleNextButton}>Next</button>
      </div>
    </div>
  );
};

export default Quiz;
