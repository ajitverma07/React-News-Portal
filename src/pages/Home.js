import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/Pagination';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const REACT_APP_NEWS_API_KEY = '9c79288a49a04bf09014465a44717998';

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
          params: {
            category,
            page: currentPage,
            apiKey: REACT_APP_NEWS_API_KEY,
            language: 'en',
            country: 'in',
          },
        });
        setArticles(response.data.articles);
        setTotalResults(response.data.totalResults);
      } catch (error) {
        setError('Failed to fetch articles');
      }
      setLoading(false);
    };
    fetchArticles();
  }, [category, currentPage]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  return (
    <div className="container mt-4 ">
      <div className="d-flex justify-content-between align-items-center">
        <h1>News Articles</h1>
        <select
          className="form-select w-auto"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
        </select>
      </div>
      {loading ? (
        <div class="spinner-border text-warning m-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <ArticleList articles={articles} />
          <Pagination
            currentPage={currentPage}
            totalResults={totalResults}
            pageSize={20}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
