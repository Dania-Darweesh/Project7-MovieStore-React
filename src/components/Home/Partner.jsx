import React, { Component } from 'react';

class Partner extends Component {
    state = {  } 
    render() { 
        return (
            			<div className="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="#" className="partner">
                       
						<img src={this.props.image} alt="" className="partner__img"/>
					</a>
				</div>
        );
    }
}
 
export default Partner; 