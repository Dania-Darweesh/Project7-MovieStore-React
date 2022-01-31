import React, { Component } from "react";
import BreadCrump from "../BreadCrump";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MovieInfo from "../single-product/MovieInfo";
import { Link } from "react-router-dom";

class Cart extends Component {
    
  state = {
    cartMovies: [],
    totalPrice: 0,
    emptyCart:false
  };
  componentDidMount() {
      const cart= JSON.parse(localStorage.getItem("cart"));
      if(!cart || cart.length==0)this.setState({emptyCart:true})
      else this.setState({emptyCart:false})
      const cartWithPrice=[];
      let total=0;
      cart?.forEach(movie=>{
          let price=0;
           if (movie.vote_average< 5)price=10;
           else if (movie.vote_average < 7.5 && movie.vote_average > 5) price = 15;
           else if (movie.vote_average > 7.5) price=20;
           total+=price;
           cartWithPrice.push({...movie,price:price})
           localStorage.setItem('cart',JSON.stringify(cartWithPrice));

         

      })
    this.setState({ cartMovies: cartWithPrice ,totalPrice:total});



    console.log(this.state.totalPrice);
  }
  deleteItem(id) {
    console.log([this.state.cartMovies.vote_average]);

    const deleteItem = this.state.cartMovies;
    
    const filteredItems = deleteItem.filter((item) =>item.id!==id);
   
    let price
    deleteItem.forEach(item=>{
      console.log(item.price);
      if(item.id===id){
        price=item.price;
      }
    });
    

    
    const count=filteredItems.length||0;
    
    localStorage.setItem("cart", JSON.stringify(filteredItems));
    this.setState({
      cartMovies: filteredItems,totalPrice:this.state.totalPrice-price,emptyCart:count===0?true:false
    });
    this.props.deleteElement(count);
  }
  deleteCart = () => {
    const deleteCart = localStorage.removeItem('cart');
    this.setState({ cartMovies: deleteCart,totalPrice:0 ,emptyCart:true});

  };
 
   


  render() {
    return (
      <div>
        <BreadCrump />

        <div class="col-12 col-md-6 col-lg-12">
        {this.state.emptyCart ? (
              <h4 style={{color: 'white', textAlign: 'center' , fontSize:'2.8rem',padding:'4rem 0rem', marginTop:'20px'}} className="col-lg-12">The cart is empty</h4>
            ) : (
              ""
            )}
        {!this.state.emptyCart && <div class="price">
            <div class="price__item price__item--first">
              <span>Cart</span>
              <span>
                <span className="form__btn" onClick={this.deleteCart}>
                  Delete all
                </span>
              </span>
            </div>
            <div class="price__item row">
              <span className="col-4">name</span>
              <span className="col-4">price</span>
              <span className="col-4">delete</span>
            </div>
           
            {this.state.cartMovies?.map((cart) => (
              <div class="price__item row">
                <span className="col-4">{cart.name ||cart.title}</span>

                <span className="col-4">
                  {cart.price}${/* {this.allPrices()}     */}
                </span>
                <span className="col-4">
                  <button
                    className="delete-btn"
                    onClick={() => this.deleteItem(cart.id)}
                  >
                    Delete
                  </button>
                </span>
              </div>
            ))}
            <div className="checkOut">
              <div class="price__item price__item--first col-3">
                <span>Total: </span> <span>{this.state.totalPrice}$</span>
              </div>

              <Link to={"/checkOut"}><button  className="checkout_btn">
                Check out
              </button></Link> 
            </div>
          </div>}
        </div>
      </div>
    );
  }
}

export default Cart;
