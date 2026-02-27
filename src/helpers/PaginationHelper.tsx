import React from "react";
import { usePagination } from "../context/PaginationContext";


const PaginationControls: React.FC = () => {
  const { goNext, goPrev, currentPage, totalPages } = usePagination();

  return (
    <div className="flex gap-4 items-center justify-around mx-80">
      <button
        className="border border-purple-950 bg-purple-900 rounded p-1 disabled:bg-purple-700 disabled:cursor-not-allowed text-white"
        onClick={goPrev} disabled={currentPage === 1}>
        Left
      </button>

      <span className="text-purple-700 font-semibold">
        <span className="text-purple-800 font-semibold text-shadow-sm/5" >{currentPage} </span>
        of
        <span className="text-purple-800 font-semibold text-shadow-sm/5" > {totalPages || 1}</span>
      </span>

      <button
        className="border border-purple-950 bg-purple-900 rounded p-1 disabled:bg-purple-700 disabled:cursor-not-allowed text-white"
        onClick={goNext}
        disabled={currentPage === totalPages}>
        Right
      </button>
    </div>
  );
};

export default PaginationControls;