import React from "react";

interface FooterProps {
  meta: { currentPage: number } | null;
  links: { next: string | null } | null;
  handlePageChange: (page: number) => void;
}

const Footer: React.FC<FooterProps> = ({ meta, links, handlePageChange }) => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex justify-center items-center h-16">
        {meta?.currentPage && meta.currentPage > 1 && (
          <button
            onClick={() => {
              handlePageChange(meta.currentPage - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mx-2"
          >
            Previous
          </button>
        )}

        {links?.next && (
          <button
            onClick={() => {
              handlePageChange((meta?.currentPage ?? 1) + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mx-2"
          >
            Next
          </button>
        )}
        <p>© 2024 Dragon Ball API. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
