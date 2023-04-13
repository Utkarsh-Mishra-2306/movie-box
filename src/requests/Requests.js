const API_KEY = "9a0994055c8a98b86fbb525e282c5e6b";

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

//  https://api.themoviedb.org/3/movie/550?api_key=9a0994055c8a98b86fbb525e282c5e6b

//  https://api.themoviedb.org/3/movie/550?api_key=9a0994055c8a98b86fbb525e282c5e6b

export default requests;

// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png