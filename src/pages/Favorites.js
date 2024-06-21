import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="container mt-4">
      <h1>Favorites</h1>
      <ArticleList articles={favorites} />
    </div>
  );
};

export default Favorites;
