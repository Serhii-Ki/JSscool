const numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};