import './App.css';
import WrappedRegister from './components/userAuthorization/WrappedRegister';
import WrappedLogin from "./components/userAuthorization/WrappedLogin";
import Home from './components/Home';
import Item from './components/Item';
import { Route, Routes, BrowserRouter as Router, useParams } from 'react-router-dom'

// import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from "./components/NotFound";
import SingleProduct from "./components/single-product/SingleProduct";
import axios from 'axios';
import { getAuth, onAuthStateChanged,updateProfile} from "firebase/auth";
import React, { Component } from 'react';
import ProfileWrapper from './components/userProfile/ProfileWrapper';
import { saveINDatabase } from './order';
import Cart from './components/Cart/Cart';
import ContactInfoWrapper from './components/ContactInfoWrapper';
import Successful from './components/Successful';

export default class App extends Component {
  state = {
    popularMovies: [],
    filteredMovies: [],
    render: false,
    category: "popular",
    auth: false,
    username: "",
    cartCount: 0,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ auth: true });

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        this.setState({ username: user.displayName });
      } else {
        this.setState({ auth: false });
        // User is signed out
        console.log("no");
        // ...
      }

      this.setState({
        cartCount: JSON.parse(localStorage.getItem("cart"))?.length,
      });

      console.log(this.state.cartCount);
    });

    //  if (this.state.filteredMovies.length > 0) return;
    if (localStorage.getItem("popular")) {
      this.renderMovies();
    } else {
      this.fetchMovies();
    }
  }
  fetchMovies = async () => {
    const API_KEY = "9b630d54f9503a9613dd2019e5cc7417";
    const category = this.state.category;
    if (this.state.popularMovies.length > 0) return;
    const data = await axios
      .get(`https://api.themoviedb.org/3/tv/${category}?api_key=${API_KEY}`)
      .catch((err) => console.log(err));
    this.setState({
      popularMovies: data.data.results.slice(0, 10),
      filteredMovies: data.data.results.slice(0, 10),
    });

    localStorage.setItem("popular", JSON.stringify(this.state.popularMovies));
  };

  renderMovies = () => {
    let movies = JSON.parse(localStorage.getItem("popular"));
    movies = movies.filter((movie) => movie.name);
    console.log(movies);
    this.setState({
      popularMovies: movies.slice(0, 10),
      filteredMovies: movies.slice(0, 10),
    });
  };
  handleFilter = async (value) => {
    if (localStorage.getItem(value)) {
      let filtered = JSON.parse(localStorage.getItem(value)).slice(0, 10);
      console.log(filtered);
      this.setState({ filteredMovies: filtered });
    } else {
      const API_KEY = "9b630d54f9503a9613dd2019e5cc7417";
      const category = value;
      console.log(category);
      //  if (this.state.filteredMovies.length > 0) return;
      const data = await axios
        .get(`https://api.themoviedb.org/3/tv/${category}?api_key=${API_KEY}`)
        .catch((err) => console.log(err));
      this.setState({ filteredMovies: data.data.results.slice(0, 10) });
      console.log(data.data.results);
      localStorage.setItem(
        value,
        JSON.stringify(data.data.results.slice(0, 10))
      );
    }
  };
  addElementToCart = (cartCount) =>{
    this.setState({cartCount: cartCount})
  }
  deleteElement=(count)=>{
    this.setState({cartCount:count})
  }

  // this.fetchMovies();

  render() {
    return (
      <div className="App">
        <Navbar
          username={this.state.username}
          auth={this.state.auth}
          cartCount={this.state.cartCount}
        />
        <Routes>
          <Route exact path="/login" element={<WrappedLogin />} />
          <Route exact path="/register" element={<WrappedRegister />} />

          <Route path="*" element={<NotFound />} />

          <Route exact path="/store" element={<Item />} />
          <Route exact path="/checkOut" element={<ContactInfoWrapper/>} />
          <Route
            exact
            path="/movie"
            element={<SingleProduct addElementToCart={this.addElementToCart} />}
          />
          <Route exact path="/cart" element={<Cart deleteElement={this.deleteElement} />} />
          <Route
            exact
            path="/"
            element={
              <Home
                filteredMovies={this.state.filteredMovies}
                popularMovies={this.state.popularMovies}
                handleFilter={this.handleFilter}
              />
            }
          />
          <Route path="/profile" element={<ProfileWrapper />}></Route>
          <Route path="/successful" element={<Successful />}></Route>
          <Route
            path="/TV/:id"
            element={<SingleProduct addElementToCart={this.addElementToCart} />}
          />
          <Route
            path="/movie/:movie_id"
            element={<SingleProduct addElementToCart={this.addElementToCart} />}
          />
        </Routes>

        <Footer />
      </div>
    );
  }
}





