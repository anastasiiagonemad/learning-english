import React from 'react';
import './categories.css';

import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__title">
        <h2>Choose category:</h2>
        <p>Выбери категорию</p>
      </div>
      <div className="categories__links">
        <Link to="/HomeAnimals" className="categories__link">
          Home animals <span>Домашние животные</span>
        </Link>
        <Link to="/WildAnimals" className="categories__link">
          Wild animals <span>Дикие животные</span>
        </Link>
        <Link to="/RepAmph" className="categories__link">
          Reptiles and Amphibians <span>Рептилии и Амфибии</span>
        </Link>
        <Link to="/Birds" className="categories__link">
          Birds <span>Птицы</span>
        </Link>
        <Link to="/Fishes" className="categories__link">
          Fishes<span>Рыбы</span>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
