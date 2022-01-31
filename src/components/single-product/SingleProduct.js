import React, { Component } from 'react';
import MovieDesc from './MovieDesc';
import MovieInfo from './MovieInfo';
import Card from '../Home/Card';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';



function SingleProduct(props) {
  const [movieInfo, setMovieInfo] = useState({})
  const [trailer, setTrailer] = useState()
  let url=""
  let comment_id= ''
  // console.log("movieInfo",movieInfo);
  let { id, movie_id } = useParams();

  console.log(id);

  const API_KEY = '9b630d54f9503a9613dd2019e5cc7417';
  if (id) {
       url =`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&append_to_response=videos`
       comment_id = id
  }else if (movie_id) {
    url =`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos`
    comment_id = movie_id
  }
  const fetchMovie = useCallback(async () => {
    const { data } = await axios.get(url)
    console.log('data', data);
    
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
      setTrailer(trailer ? trailer : data.videos.results[0])
    }
    // const json = await response.json()
    setMovieInfo(data)
  }, [url])

  useEffect(() => {
    window.scroll(0, 0)
    fetchMovie()
  }, [fetchMovie])
  console.log(movieInfo);



  if (!movieInfo) {
    return (
      <section className="section details">
        <div className="details__bg" data-bg="img/home/home__bg.jpg"></div>
        <h1 style={{ color: 'white' }}> Not found </h1>
      </section>
    )
  }
  const moviePrice = (rating) => {

      if(rating <5)return 10;
    if((rating <7.5) && rating > 5)return 15;
    if(rating > 7.5)return 20;
   
  }
 const addElementToCart = (cartCount) => {
   console.log(props)
   props.addElementToCart(cartCount);
 };

  return (
    <div>
      <MovieInfo
        movieInfo={movieInfo}
        trailer={trailer}
        price={moviePrice(movieInfo.vote_average)}
        addElementToCart={addElementToCart}
      />
      <MovieDesc movieInfo={movieInfo} />
    </div>
  );

}
export default SingleProduct
