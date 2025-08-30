import React from "react";

type PaginationProps = {
  page: number;
  totalPage: number;
  setPage: (page: number) => void;
};

const Pagination = ({ page, totalPage, setPage }: PaginationProps) => {
  const handleNext = () => {
    setPage(page - 1);
  };

  return (
    <div className="flex items-center justify-center">
      <nav className="inline-flex items-center">
        <span className="text-sm text-gray-500 mr-4">
          Page {page} of {totalPage}
        </span>
        <button
          className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
          onClick={handleNext}
        >
          Older »
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
