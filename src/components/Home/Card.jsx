import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Card extends Component {
    state = {  } 
	
    render() { 
        return (
            			<div className="col-6 col-sm-12 col-lg-6">
							<div className="card card--list">
								<div className="row">
									<div className="col-12 col-sm-4">
										<div className="card__cover">
											<img src={this.props.image} alt=""/>
											<Link to={`TV/${this.props.id}`} className="card__play">
												<i className="icon ion-ios-play"></i>
											</Link>
										</div>
									</div>

									<div className="col-12 col-sm-8">
										<div className="card__content">
											<h3 className="card__title"><Link to={`TV/${this.props.id}`} >{this.props.title}</Link></h3>
											<span className="card__category">
												<Link to="#">{this.props.category}</Link>
										
											</span>
											<span className="card__category">
												<a href="#">{this.props.price}$</a>
										
											</span>

											<div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-star"></i>{this.props.rating}</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<div className="card__description">
												<p>{this.props.desc}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
        );
    }
}
 
export default Card;
	