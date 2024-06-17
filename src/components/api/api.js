const API_KEY = "eeaec9a54940aaac4a382f0852f36155";
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWFlYzlhNTQ5NDBhYWFjNGEzODJmMDg1MmYzNjE1NSIsInN1YiI6IjY0MzJiMjA1MzEwMzI1MDEyNjk3YTVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o-uOWyHUK35ARNZIdITRprT2lCL9H3NX55cM_xKa05I'
const TMD_API = "https://api.themoviedb.org/3"
const base_url = "https://image.tmdb.org/t/p/original"


const api = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}& with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres-35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export {api,API_TOKEN,base_url,TMD_API}
