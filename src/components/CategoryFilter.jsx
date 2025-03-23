import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="filter-tabs">
      <button 
        className={activeFilter === 'todos' ? 'active' : ''} 
        onClick={() => setActiveFilter('todos')}
      >
        Todos
      </button>
      <button 
        className={activeFilter === 'familia' ? 'active' : ''} 
        onClick={() => setActiveFilter('familia')}
      >
        Familia
      </button>
      <button 
        className={activeFilter === 'trabajo' ? 'active' : ''} 
        onClick={() => setActiveFilter('trabajo')}
      >
        Trabajo
      </button>
      <button 
        className={activeFilter === 'social' ? 'active' : ''} 
        onClick={() => setActiveFilter('social')}
      >
        Social
      </button>
    </div>
  );
};

export default CategoryFilter; 