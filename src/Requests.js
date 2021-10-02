//Typically we would store in {process.env.API_KEY}
const API_KEY = "1152c929c9e93dfd88b4c3605645eae4";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&lenguage=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&lenguage=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

//ejem:

//https://api.themoviedb.org/3/trending/all/week?api_key=1152c929c9e93dfd88b4c3605645eae4&lenguage=en-US