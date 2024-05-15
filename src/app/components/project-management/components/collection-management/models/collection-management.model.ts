export interface ICollectionParams {
  pageNo?: number;
  keyword?: string;
  roles?: number[];
  status?: boolean;
  pageSize?: number;
}

export interface ICollection {
  id?: number;
  name?: string;
  noOfProject?: number;
  description?: string,
}