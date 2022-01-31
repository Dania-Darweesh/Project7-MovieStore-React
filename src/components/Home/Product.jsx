import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Product extends Component {
    
    render() { 
        return (
                <div className="item">
            <div className="card card--big">
              <div className="card__cover">
                <img src={this.props.image} alt="" />
                <Link  to={`TV/${this.props.id}`} className="card__play">
                  <i className="icon ion-ios-play"></i>
                </Link>
              </div>
              <div className="card__content">
                <h3 className="card__title">
                  <Link to="">{this.props.title}</Link>
                </h3>
                <span className="card__category">
                  <Link to="#">{this.props.category}</Link>
                
                </span>
                <span className="card__rate">
                  <i className="icon ion-ios-star"></i>{this.props.rating}
                </span>
              </div>
            </div>
              

          </div>
        );
    }

}
 
export default Product;
