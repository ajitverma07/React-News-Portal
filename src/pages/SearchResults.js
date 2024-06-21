import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ArticleList from '../components/ArticleList';

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const REACT_APP_NEWS_API_KEY = '9c79288a49a04bf09014465a44717998'

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
          params: {
            q: searchTerm,
            apiKey: REACT_APP_NEWS_API_KEY,
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        setError('Failed to fetch search results');
      }
      setLoading(false);
    };
    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div className="container mt-4">
      <h1>Search Results for "{searchTerm}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default SearchResults;
