import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube'
import './Youtube.css'
function MovieInfo(props) {
  
	
	const addToCart = () => {
    console.log('entered');
	if(localStorage.getItem('cart')){
		let oldCart=JSON.parse(localStorage.getItem('cart'));
    let alreadyExcists=false;
   oldCart.forEach(movie => {
    
      if(movie.id===props.movieInfo.id){
        alreadyExcists=true;
        return;
      }
      
    });
    if(alreadyExcists)return 
    
    
	
		const cart = [...oldCart, props.movieInfo];
    console.log('new_cart',cart);
		localStorage.setItem('cart',JSON.stringify(cart));
	}else {
    console.log('else');

		localStorage.setItem('cart', JSON.stringify([props.movieInfo]))
	}

	const count = JSON.parse(localStorage.getItem("cart"))?.length
	console.log(count)
	props.addElementToCart(count)


	}


	

	return (
    <>
      <section className="section details">
        <div className="details__bg" data-bg="img/home/home__bg.jpg"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="details__title">{props.movieInfo.name}</h1>
            </div>

            <div className="col-12 col-xl-6">
              <div className="card card--details">
                <div className="row">
                  <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
                    <div className="card__cover">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${props.movieInfo.poster_path}`}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                    <div className="card__content">
                      <div className="card__wrap">
                        <span className="card__rate">
                          <i className="icon ion-ios-star"></i>
                          {props.movieInfo.vote_average}
                        </span>

                        <ul className="card__list">
                          <li>HD</li>
                          <li>16+</li>
                        </ul>
                      </div>

                      <ul className="card__meta">
                        <li>
                          <span>Genre:</span> <a href="#">Action</a>
                          <a href="#">Triler</a>
                        </li>
                        <li>
                          <span>Release year:</span>
                          {props.movieInfo?.release_date}
                        </li>
                        <li>
                          <span>Running time:</span> {props.movieInfo?.runtime}
                        </li>
                        <li>
                          <span>Country:</span>{" "}
                          <a href="#">{props.movieInfo.origin_country}</a>{" "}
                        </li>
                        <li>
                          <span>Price:</span> <a href="#">{props.price}$</a>{" "}
                        </li>
                      </ul>

                      <div className="card__description card__description--details">
                        {props.movieInfo.overview}
                      </div>
                      <button type="button" className="form__btn" onClick={addToCart}>
                        {" "}
                        <i className="btn ">Add to cart</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-6 col-sm-12">
              {props.trailer ? (
                <YouTube
                className='mobile_player'
                videoId={props.trailer.key}
                  opts={{
                    height: "390",
                    width: "640",
                    playerVars: {
                      autoplay: 1,
                      controls: 0,
                      cc_load_policy: 0,
                      fs: 0,
                      iv_load_policy: 0,
                      modestbranding: 0,
                      rel: 0,
                      showinfo: 0,
                    },
                  }}
                />
              ) : (
                ""
              )}

              {/* <video controls playsInline poster="../../../../cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" id="player">
								<source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size="576" />
								<source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" size="720" />
								<source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" size="1080" />
								<source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4" type="video/mp4" size="1440" />

								<track kind="captions" label="English" srcLang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
									default />
								<track kind="captions" label="Français" srcLang="fr" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt" />

								<a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>Download</a>
							</video> */}
            </div>

            <div className="col-12">
              <div className="details__wrap">
                <div className="details__devices">
                  <span className="details__devices-title">
                    Available on devices:
                  </span>
                  <ul className="details__devices-list">
                    <li>
                      <i className="icon ion-logo-apple"></i>
                      <span>IOS</span>
                    </li>
                    <li>
                      <i className="icon ion-logo-android"></i>
                      <span>Android</span>
                    </li>
                    <li>
                      <i className="icon ion-logo-windows"></i>
                      <span>Windows</span>
                    </li>
                    <li>
                      <i className="icon ion-md-tv"></i>
                      <span>Smart TV</span>
                    </li>
                  </ul>
                </div>

                <div className="details__share">
                  <span className="details__share-title">
                    Share with friends:
                  </span>

                  <ul className="details__share-list">
                    <li className="facebook">
                      <a href="#">
                        <i className="icon ion-logo-facebook"></i>
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="#">
                        <i className="icon ion-logo-instagram"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="icon ion-logo-twitter"></i>
                      </a>
                    </li>
                    <li className="vk">
                      <a href="#">
                        <i className="icon ion-logo-vk"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}

export default MovieInfo