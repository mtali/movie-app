import {Movie} from "./movie";

export interface MoviesResponse {
  id: number;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number
}
