import React, { Component } from 'react';

export default class Reviews extends Component {
  render() {
    return (
        <div className="tab-pane fade active show" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
                        <div className="row">
                            {/* <!-- reviews --> */}
                            <div className="col-12">
                                <div className="reviews">
                                    <ul className="reviews__list">
                                        <li className="reviews__item">
                                            <div className="reviews__autor">
                                                <img className="reviews__avatar" src="img/user.svg" alt="" />
                                                <span className="reviews__name">Best Marvel movie in my opinion</span>
                                                <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

                                                <span className="reviews__rating"><i className="icon ion-ios-star"></i>8.4</span>
                                            </div>
                                            <p className="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        </li>

                                        <li className="reviews__item">
                                            <div className="reviews__autor">
                                                <img className="reviews__avatar" src="img/user.svg" alt="" />
                                                <span className="reviews__name">Best Marvel movie in my opinion</span>
                                                <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

                                                <span className="reviews__rating"><i className="icon ion-ios-star"></i>9.0</span>
                                            </div>
                                            <p className="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        </li>

                                        <li className="reviews__item">
                                            <div className="reviews__autor">
                                                <img className="reviews__avatar" src="img/user.svg" alt="" />
                                                <span className="reviews__name">Best Marvel movie in my opinion</span>
                                                <span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

                                                <span className="reviews__rating"><i className="icon ion-ios-star"></i>7.5</span>
                                            </div>
                                            <p className="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                        </li>
                                    </ul>

                                    <form action="#" className="form">
                                        <input type="text" className="form__input" placeholder="Title" />
                                        <textarea className="form__textarea" placeholder="Review"></textarea>
                                        <div className="form__slider">
                                            <div className="form__slider-rating" id="slider__rating"></div>
                                            <div className="form__slider-value" id="form__slider-value"></div>
                                        </div>
                                        <button type="button" className="form__btn">Send</button>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- end reviews --> */}
                        </div>
                    </div>
    );
  }
}
