import { createSlice } from '@reduxjs/toolkit';
import {
  sagaEventCallBegan,
  sagaEventCallFail,
  sagaEventCallSuccess,
} from '../saga';

const initialState = {
  error: {},
  status: '',
  movies: [],
  newMovies: [],
  tags: [],
  ratings: [],
  tag: {
    status: false,
    movieId: 0,
    tag: '',
    timestamp: 0,
    userId: 0,
  },
  rating: {
    status: false,
    movieId: 0,
    rating: 0,
    timestamp: 0,
    userId: 0,
  },
  movie: {
    genres: [],
    movieId: -1,
    rating: 0,
    title: '',
    year: 0,
  },
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovieById: (state, action) => {
      state.movie = action.payload;
    },
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
    getNewMovies: (state, action) => {
      state.newMovies = action.payload;
    },
    getRatings: (state, action) => {
      state.ratings = action.payload;
    },
    getTags: (state, action) => {
      state.tags = action.payload;
    },
    setRating: () => {},
    setTag: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(sagaEventCallBegan, (state) => {});
    builder.addCase(sagaEventCallSuccess, (state) => {});
    builder.addCase(sagaEventCallFail, (state) => {});
  },
});

export default movieSlice.reducer;

export const {
  getMovieById,
  getMovies,
  getNewMovies,
  getRatings,
  getTags,
  setRating,
  setTag,
} = movieSlice.actions;
