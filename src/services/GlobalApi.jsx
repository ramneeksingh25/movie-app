import axios from "axios";
const movieBaseURL="https://api.themoviedb.org/3"
const api_key="99fb39e9a569abf0ee92a5ef3bbeb539"
const movieByGenreBaseURL="https://api.themoviedb.org/3/discover/movie"
// https://api.themoviedb.org/3/trending/movie/day?api_key=99fb39e9a569abf0ee92a5ef3bbeb539
const getTrendingVideos=axios.get(movieBaseURL+"/trending/all/day?api_key="+api_key);

//https://api.themoviedb.org/3/discover/movie?api_key=99fb39e9a569abf0ee92a5ef3bbeb539&with_genres=28
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"?api_key="+api_key+"&with_genres="+id);
export default {getTrendingVideos, getMovieByGenreId};