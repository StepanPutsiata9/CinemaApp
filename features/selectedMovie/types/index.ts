export interface ISelectedMovie {
  id: number;
  name: string;
  poster: string;
  genres: string[];
  ageRating: number;
  rating: number;
  description: string;
  movieLength: number;
}

export interface ISelectedMovieState {
  selectedMovie: null | ISelectedMovie;
  selectedMovieLoading: boolean;
  selectedMovieError: null | string;
}
