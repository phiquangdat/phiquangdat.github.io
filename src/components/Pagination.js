import React from "react";

const Pagination = () => {
  return (
    <div className="text-center mt-12">
      <nav className="inline-flex items-center">
        <span className="text-sm text-gray-500 mr-4">Page 1 of 2</span>
        <button
          className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
          onClick={() => console.log("Navigate to older posts")}
        >
          Older »
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
