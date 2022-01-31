import React, { Component } from 'react';

export default class Content_head extends Component {
    
    render() {
        return (
            <>
                <div className="content__head">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <!-- content title --> */}
                                <h2 className="content__title">Discover</h2>
                                {/* <!-- end content title --> */}

                                {/* <!-- content tabs nav --> */}
                                <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" style={{'cursor': 'pointer'}}  role="tab" aria-controls="tab-1" onClick={()=> this.props.ShowComments() } aria-selected="true">Comments</a>
                                    </li>

                                 

                                    
                                </ul>
                                {/* <!-- end content tabs nav --> */}

                                {/* <!-- content mobile tabs nav --> */}
                                <div className="content__mobile-tabs" id="content__mobile-tabs">
                                    <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" >
                                        <input type="button" value="Comments" />
                                        <span></span>
                                    </div>

                                    <div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item"><a className="nav-link active" id="1-tab" data-toggle="tab"
                                             href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true" >Comments</a></li>

                                
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- end content mobile tabs nav --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
