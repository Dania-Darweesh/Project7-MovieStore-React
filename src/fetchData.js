
import axios from 'axios';
const API_KEY='9b630d54f9503a9613dd2019e5cc7417';
const fetchMovies = async () => {
  
    const data = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`).catch(err=>console.log(err));

    return data;
  }
  //https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
  export{fetchMovies}

  