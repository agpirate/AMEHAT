
  export default interface ApiResponse<T> {
  data: T;
  pagination?: {
    total: number;
    pages: number;
  };
}

