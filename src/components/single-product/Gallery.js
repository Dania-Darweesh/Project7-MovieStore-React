import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class Gallery extends Component {
    render() {
        return (
            <div className="tab-pane fade active show" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
                {/* <!-- project gallery --> */}
                <div className="gallery" itemScope>
                    <div className="row">
                        {/* <!-- gallery item --> */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                            <a href="img/gallery/project-1.jpg" itemProp="contentUrl" data-size="1920x1280">
                                <img src="img/gallery/project-1.jpg" itemProp="thumbnail" alt="Image description" />
                            </a>
                            <figcaption itemProp="caption description">Some image caption 1</figcaption>
                        </figure>
                        {/* <!-- end gallery item --> */}

                        {/* <!-- gallery item --> */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                            <a href="img/gallery/project-2.jpg" itemProp="contentUrl" data-size="1920x1280">
                                <img src="img/gallery/project-2.jpg" itemProp="thumbnail" alt="Image description" />
                            </a>
                            <figcaption itemProp="caption description">Some image caption 2</figcaption>
                        </figure>
                        {/* <!-- end gallery item --> */}

                        {/* <!-- gallery item --> */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                            <a href="img/gallery/project-3.jpg" itemProp="contentUrl" data-size="1920x1280">
                                <img src="img/gallery/project-3.jpg" itemProp="thumbnail" alt="Image description" />
                            </a>
                            <figcaption itemProp="caption description">Some image caption 3</figcaption>
                        </figure>
                        {/* <!-- end gallery item --> */}

                        {/* <!-- gallery item --> */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                            <a href="img/gallery/project-4.jpg" itemProp="contentUrl" data-size="1920x1280">
                                <img src="img/gallery/project-4.jpg" itemProp="thumbnail" alt="Image description" />
                            </a>
                            <figcaption itemProp="caption description">Some image caption 4</figcaption>
                        </figure>
                        {/* <!-- end gallery item --> */}

                        {/* <!-- gallery item --> */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                            <a href="img/gallery/project-5.jpg" itemProp="contentUrl" data-size="1920x1280">
                                <img src="img/gallery/project-5.jpg" itemProp="thumbnail" alt="Image description" />
                            </a>
                            <figcaption itemProp="caption description">Some image caption 5</figcaption>
                        </figure>
                        {/* <!-- end gallery item --> */}

                        {/* <!-- gallery item --> */}
                        <figure className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
                            <a href="img/gallery/project-6.jpg" itemProp="contentUrl" data-size="1920x1280">
                                <img src="img/gallery/project-6.jpg" itemProp="thumbnail" alt="Image description" />
                            </a>
                            <figcaption itemProp="caption description">Some image caption 6</figcaption>
                        </figure>
                        {/* <!-- end gallery item --> */}
                    </div>
                </div>
                {/* <!-- end project gallery --> */}
            </div>
        );
    }
}
