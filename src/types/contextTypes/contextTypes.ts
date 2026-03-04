export interface PaginationContextType {
  limit: number;
  offset: number;
  totalCount: number;
  currentPage: number;
  totalPages: number;
  goNext: () => void;
  goPrev: () => void;
  setTotalCount: (count: number) => void;
  resetOffset: () => void
}
export interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, userId: string) => void;
  logout: () => void;
}