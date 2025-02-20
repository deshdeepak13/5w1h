import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Business",
  "Technology",
  "Sports",
  "Health",
  "Entertainment",
  "Science",
  "Politics",
  "World",
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
  };

  return (
    <div className="w-full bg-gray-100 py-3 px-4 rounded-lg shadow-sm overflow-x-auto">
      <div className="flex space-x-4 whitespace-nowrap overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm text-sm font-medium hover:bg-gray-200 transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
