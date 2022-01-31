import React, { Component } from 'react';

class BreadCrump extends Component {
    state = {  } 
    render() { 
        return (
            
<section class="section section--first section--bg" data-bg="img/section/section.jpg">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="section__wrap">
					
						<h2 class="section__title">Pricing</h2>
				
						<ul class="breadcrumb">
							<li class="breadcrumb__item"><a href="#">Home</a></li>
							<li class="breadcrumb__item breadcrumb__item--active">Pricing</li>
						</ul>
					
					</div>
				</div>
			</div>
		</div>
	</section>
        );
    }
}
 
export default BreadCrump;













