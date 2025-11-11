export interface IMoviesListState {
  allMoviesList: null | MoviesData;
  moviesLoading: boolean;
  moviesError: null | string;
  searchedMoviesList: null | Movie[];
}

export interface Movie {
  id: number;
  name: string;
  url?: string;
  poster?: string;
}

export interface MoviesData {
  main: Movie;
  popular: Movie[];
  all: Movie[];
}
