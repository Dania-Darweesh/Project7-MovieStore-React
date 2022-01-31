import React, { Component } from 'react';
import {  useParams,Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

export default function Related_movie ()  {
    const [movieInfo, setMovieInfo] = useState([{}])

    let { id, movie_id } = useParams();
    let url=""
    let movie=""

  
    const API_KEY = '9b630d54f9503a9613dd2019e5cc7417';
    if (id) {
        movie="/movie/"
         url =`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }else if (movie_id) {
        movie="/TV/"
      url =`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`
    }
    const fetchMovie = useCallback(async () => {
        const { data } = await axios.get(url)
        console.log('data', data);
        
       
        // const json = await response.json()
        setMovieInfo(data.results.slice(Math.floor(Math.random() * 6) + 1 , Math.floor(Math.random() * 20) + 1))}, [url])
    
      useEffect(() => {
        fetchMovie()
      }, [fetchMovie])
      console.log("movieInfo",movieInfo);

      movieInfo.forEach(element => {
          console.log(element.id);
      });

    return (
        <div className="col-12 col-lg-4 col-xl-4">
        <div className="row">
            {/* <!-- section title --> */}
            <div className="col-12">
                <h2 className="section__title section__title--sidebar">You may also like...</h2>
            </div>
            {/* <!-- end section title --> */}

            {/* <!-- card --> */}
        {movieInfo && movieInfo.map(element => (
            
            <div key={element.id} className="col-6 col-sm-4 col-lg-6">
                <div  className="card">
                    <div className="card__cover">
                        <img src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt="" />
                        <Link to={`${movie}${element.id}`} className="card__play">
                            <i className="icon ion-ios-play"></i>
                          </Link>
                    </div>
                    <div className="card__content">
                        <h3 className="card__title"><Link to={`${movie}${element.id}`}>{element.original_title}</Link></h3>
                        <span className="card__category">
                            <a href="#">Action</a>
                            <a href="#">Triler</a>
                        </span>
                        <span className="card__rate"><i className="icon ion-ios-star"></i>{element.vote_average}</span>
                    </div>
                </div>
            </div>
        ))}
            {/* <!-- end card --> */}


        </div>
    </div>
    );
  
}
