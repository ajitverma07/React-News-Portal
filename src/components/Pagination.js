import React from 'react';

const Pagination = ({ currentPage, totalResults, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <nav aria-label="Page navigation  ">
      <ul className="pagination justify-content-center mt-5 ">
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <button className="page-link text-warning bg-dark" onClick={() => onPageChange(currentPage - 1)}>
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            className={`page-item ${currentPage === index + 1 && 'active '} `}
            key={index}
          >
            <button className="page-link text-warning bg-dark" onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages && 'disabled'}`}>
          <button className="page-link text-warning bg-dark" onClick={() => onPageChange(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
