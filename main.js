console.log('hello world');
const numberOfFilms = +prompt('Сколько фильмов посмотрел?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');
numberOfFilms.movies[a] = b;        
numberOfFilms.movies[c] = d;  


console.log(numberOfFilms);