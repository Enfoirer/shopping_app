import React from 'react';
import { Category } from '../types/Product';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="category-filter">
      <h3>Categories</h3>
      <button 
        className={selectedCategory === '' ? 'active' : ''}
        onClick={() => onSelectCategory('')}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category.slug}
          className={selectedCategory === category.slug ? 'active' : ''}
          onClick={() => onSelectCategory(category.slug)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
