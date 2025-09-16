import React, { useCallback } from "react";

type PaginationProps = {
  page: number;
  totalPage: number;
  setPage: (page: number) => void;
};

const Pagination = ({ page, totalPage, setPage }: PaginationProps) => {
  const handlePrevious = useCallback(() => {
    if (page > 1) setPage(page - 1);
  }, [page]);

  const handleNext = useCallback(() => {
    if (page < totalPage) setPage(page + 1);
  }, [page, totalPage]);

  return (
    <div className="flex items-center justify-center">
      <nav className="inline-flex items-center">
        <button
          className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
          onClick={handlePrevious}
        >
          ← Previous
        </button>
        <span className="text-sm text-gray-500 mx-4">
          Page {page} of {totalPage}
        </span>
        <button
          className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
          onClick={handleNext}
        >
          Next →
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
