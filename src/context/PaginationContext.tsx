import React, { createContext, useContext, useState, ReactNode } from "react";
import { PaginationContextType } from "../App.types";

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
);

interface PaginationProviderProps {
  children: ReactNode;
  initialLimit?: number;
}

export const PaginationProvider: React.FC<PaginationProviderProps> = ({
  children,
  initialLimit = 3,
}) => {
  const [limit] = useState<number>(initialLimit);
  const [offset, setOffset] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalCount / limit);

  const goNext = () => {
    if (offset + limit < totalCount) {
      setOffset((prev) => prev + limit);
    }
  };

  const goPrev = () => {
    if (offset > 0) {
      setOffset((prev) => prev - limit);
    }
  };

  const resetOffset = ()=>{
    setOffset(0)
  }

  return (
    <PaginationContext.Provider
      value={{
        limit,
        offset,
        totalCount,
        currentPage,
        totalPages,
        goNext,
        goPrev,
        setTotalCount,
        resetOffset,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within PaginationProvider");
  }
  return context;
};