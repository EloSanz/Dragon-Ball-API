import React from 'react';

interface FooterProps {
  meta: { currentPage: number } | null;
  links: { next: string | null } | null;
  handlePageChange: (page: number) => void;
}

const Footer: React.FC<FooterProps> = ({ meta, links, handlePageChange }) => {
  return (
    <footer className="p-4 bg-gray-100 border-t">
      <div className="flex justify-center items-center h-16">
        {meta?.currentPage && meta.currentPage > 1 && (
          <button
            onClick={() => handlePageChange(meta.currentPage - 1)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mx-2"
          >
            Previous
          </button>
        )}

        {links?.next && (
          <button
            onClick={() => handlePageChange((meta?.currentPage ?? 1) + 1)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mx-2"
          >
            Next
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
