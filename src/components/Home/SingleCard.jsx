import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleCard extends Component {
     
    render() { 
        return (
            			
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
							<img src={this.props.image} alt=""/>
							<Link to={`movie/${this.props.id}`} className="card__play">
												<i className="icon ion-ios-play"></i>
											</Link>
						</div>
						<div className="card__content">
							<h3 className="card__title"><Link to={`movie/${this.props.id}`} >{this.props.title}</Link></h3>
							<span className="card__category">
								<a href="#">{this.props.category}</a>
						
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>{this.props.rating}</span>
						</div>
					</div>
				</div>
			
        );
    }
}
 
export default SingleCard;