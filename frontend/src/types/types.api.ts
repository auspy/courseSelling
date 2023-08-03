export enum ApiMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}
export type FetchProps = {
  url?: string;
  method?: ApiMethods;
  body?: any;
  headers?: Record<string, string>;
};
