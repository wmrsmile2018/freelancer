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
  },
  rating: {
    status: false,
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
      state.movie = {
        ...state.movie,
        ...action.payload,
      };
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
    setRating: (state) => {
      state.rating.status = true;
    },
    setTag: (state) => {
      state.tag.status = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sagaEventCallBegan, (state) => {
      state.tag.status = false;
      state.rating.status = false;
    });
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
