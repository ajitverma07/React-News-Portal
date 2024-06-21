import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  const addToFavorites = (article) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = [...favorites, article];
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <div className="row pt-3 bg-warning">
      {articles.map((article, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card  ">
            <img src={article.urlToImage} className="card-img-top" alt={article.title} />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <div className="d-flex justify-content-between">
                <Link to={`/article/${index}`} state={{ article }} className="btn btn-warning">
                  Read More
                </Link>
                <button onClick={() => addToFavorites(article)} className="btn btn-warning">
                  Add to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
