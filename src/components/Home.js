import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from "../courselOptions";
import Product from "./Home/Product";
import Card from "./Home/Card";
import SingleCard from "./Home/SingleCard";
import Partner from "./Home/Partner";
import "./userAuthorization/sectionBackground.css";
import { fetchMovies } from "../fetchData";
import { getAuth } from "firebase/auth";
import Spinner from "./Spinner";
import './Carousel.css'

// console.log = console.warn = console.error = () => {};

export default class Home extends Component {
 
  state = {
    popularMovies: [],
    
  
 
  };
  componentDidMount(){
    console.log('component did mount');
    console.log(this.props.popularMovies);
    console.log(this.state.CarouselMovies);
 
    window.scrollTo(0,0);
    const auth=getAuth();
    const user = auth.currentUser;
   


  }
  componentDidUpdate() {
   
    
   }

  renderSlider() {
    this.props.popularMovies?.map((movie) => {
      return (
        <Product
          key={movie.id}
          title={movie.name}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          category={movie.origin_country}
          rating={movie.vote_average}
        />
      );
    });
  }
  handleFilter = (e) =>{
   
    const value = e.target;
     console.log(value.getAttribute("data-value"));
    this.props.handleFilter(value.getAttribute('data-value'));
   

  }

  moviePrice = (rating) => {
    
    if(rating <5)return 10;
    if((rating <7.5) && rating > 5)return 15;
    if(rating > 7.5)return 20;
    

    }
  

  render() {
    console.log('render');
    console.log(this.props.popularMovies);
    
    
    
    return (
      <div>
        <section class="home home--bg">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1 class="home__title">
                  <b>Popular</b> OF THIS SEASON
                  <button></button>
                </h1>
              </div>
              <div className="col-12">
                <div className="home__carousel">
                 {this.props.popularMovies.length>0? <OwlCarousel
                    items={5}
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    {...options}
                  >
                   {this.props.popularMovies?.map(movie=>
                    
                    <Product
                    key={Math.random()}
                    id={movie.id}
                    title={movie.name}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    category={movie.origin_country}
                    rating={movie.vote_average}
                    desc={movie.overview}
                    price={this.moviePrice(movie.vote_average)}

                  />
                    )}
                 
                  </OwlCarousel>:<Spinner/>}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="content">
          <div class="content__head">
            <div class="container">
              <div class="row">
                <div class="col-12">
          
                  <h2 class="content__title">New items</h2>

                  <ul
                    class="nav nav-tabs content__tabs"
                    id="content__tabs"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#tab-1"
                        role="tab"
                        aria-controls="tab-1"
                        aria-selected="true"
                        onClick={this.handleFilter}
                        data-value="popular"
                      >
                        NEW RELEASES
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#tab-2"
                        role="tab"
                        aria-controls="tab-2"
                        aria-selected="false"
                        onClick={this.handleFilter}
                        data-value="airing_today"
                      >
                        MOVIES
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#tab-3"
                        role="tab"
                        aria-controls="tab-3"
                        aria-selected="false"
                        onClick={this.handleFilter}
                        data-value="top_rated"
                      >
                        TV SERIES
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#tab-4"
                        role="tab"
                        aria-controls="tab-4"
                        aria-selected="false"
                        onClick={this.handleFilter}
                        data-value="on_the_air"
                      >
                        ON THE AIR
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            {/* <!-- content tabs --> */}
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
                aria-labelledby="1-tab"
              >
                <div class="row">
                  {/* <!-- card --> */}

                  {this.props.filteredMovies?.map((movie) => {
                    if (movie.overview === "") return;
                 

                    if (movie.name === "Young Royals")return;
                      return (
                        <Card
                          key={movie.id}
                          id={movie.id}
                          title={movie.name}
                          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          category={movie.origin_country}
                          rating={movie.vote_average}
                          desc={movie.overview}
                          price={this.moviePrice(movie.vote_average)}
                        />
                      );
                  }
                  )}
                  {/* <!-- end card --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section section--bg" data-bg="img/section/section.jpg">
          <div class="container">
            <div class="row">
              {/* <!-- section title --> */}
              <div class="col-12">
                <h2 class="section__title">Expected premiere</h2>
              </div>
              {/* <!-- end section title --> */}
              {this.props.popularMovies?.map((movie) => {
                if (movie.overview === "") return;

                return (
                  <SingleCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.name}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    rating={movie.vote_average}
                    price={this.moviePrice(movie.vote_average)}
                  />
                );
              })}

              {/* <!-- section btn --> */}
              {/* <div class="col-12">
					<a href="#" class="section__btn">Show more</a>
				</div> */}
              {/* <!-- end section btn --> */}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2 class="section__title section__title--no-margin">
                  Our Partners
                </h2>
              </div>

              <div class="col-12">
                <p class="section__text section__text--last-with-margin">
                  It is a long <b>established</b> fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using.
                </p>
              </div>

              <Partner image="img/partners/3docean-light-background.png" />
              <Partner image="img/partners/activeden-light-background.png" />
              <Partner image="img/partners/audiojungle-light-background.png" />
              <Partner image="img/partners/codecanyon-light-background.png" />
              <Partner image="img/partners/photodune-light-background.png" />
              <Partner image="img/partners/themeforest-light-background.png" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
