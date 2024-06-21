import React from 'react';
import { useLocation } from 'react-router-dom';

const ArticlePage = () => {
  const location = useLocation();
  const { article } = location.state;

  return (
    <div className="container mt-4 bg-light">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} className="img-fluid" alt={article.title} />
      <p className="mt-4">{article.content}</p>
    </div>
  );
};

export default ArticlePage;
