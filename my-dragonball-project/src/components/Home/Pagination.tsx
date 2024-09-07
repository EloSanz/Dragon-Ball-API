import React from 'react';

interface PaginationProps {
  meta: { currentPage: number; totalItems: number; itemsPerPage: number } | null;
  links: { next: string | null } | null;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  meta,
  handlePageChange
}) => {
  if (!meta) {
    return null;
  }

  const { currentPage, totalItems, itemsPerPage } = meta;

  const hasNextPage = currentPage * itemsPerPage < totalItems;

  return (
    <div className=" flex justify-center items-center mt-auto md:pt-1">
      {currentPage > 1 && (
        <button
          onClick={() => {
            handlePageChange(currentPage - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mx-2"
        >
          Previous
        </button>
      )}

      {hasNextPage && (
        <button
          onClick={() => {
            handlePageChange(currentPage + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mx-2"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
