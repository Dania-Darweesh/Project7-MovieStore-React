import React, { Component } from "react";
import CountryOptions from "./input_options/countryOptions";
import { Col, Row, FormGroup } from "reactstrap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./userAuthorization/firebase";
import "./Checkout.css";
import CheckoutCart from "./CheckoutCart";
import { db } from "./userAuthorization/firebase";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  onSnapshot,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";

import StateOptions from "./input_options/stateOptions";
export default class ContactInfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    country: "Jordan",
    phone: "",
    state: "",
    authStatus: false,
    cart: [],
    totalPrice: 0,
    error: {},
    id: "",
  };
  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ auth: true });
        this.setState({ id: user.uid });
      } else {
        console.log("hello");
        this.setState({ authStatus: false });
        localStorage.setItem("checkout", "true");
        this.props.navigate("/register");
      }
    });
    const cart = JSON.parse(localStorage.getItem("cart"));
    var totalPrice = cart.reduce((acc, movie) => acc + movie.price, 0);
    this.setState({ cart: cart, totalPrice: totalPrice });
  }
  addCountry = (country) => {
    this.setState({ country: country });
  };
  chekout = (e) => {
    e.preventDefault();
    const doc = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phone,
      country: this.state.country,
      totalPrice: this.state.totalPrice,
      cart: JSON.stringify(this.state.cart),
      id: this.state.id,
      created: Timestamp.now(),
    };

    try {
      addDoc(collection(db, "orders"), doc).then(() => {
        //empty inputs
        this.setState(
          {
            firstName: "",
            lastName: "",
            email: "",
            country: "Jordan",
            phone: "",
            state: "",
            cart: [],
            totalPrice: 0,
            error: {},
            id: "",
          }
        );
      });
      //end empty inputs
      //empty cart
      localStorage.removeItem('cart');
      this.props.navigate('../successful')
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message });
    }
  };

  render() {
    return (
      <div className="sign section--bg" data-bg="img/section/section.jpg">
        <div className="sign__content checkout__form">
          {/* grid content */}
          <div className="row">
            <div className="col-12 col-lg-8">
              <form action="#" className="sign__form ">
                <a href="index.html" className="sign__logo">
                  <img src="img/logo.svg" alt="" />
                </a>
                <Row>
                  <Col md={6}>
                    <div className="sign__group">
                      <input
                        value={this.state.firstname}
                        onChange={(e) =>
                          this.setState({ firstName: e.target.value })
                        }
                        type="text"
                        className="sign__input"
                        placeholder="Fisrt Name"
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="sign__group">
                      <input
                        value={this.state.lastname}
                        onChange={(e) =>
                          this.setState({ lastName: e.target.value })
                        }
                        type="text"
                        className="sign__input"
                        placeholder="Last Name"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup className="dropdown-container">
                      <CountryOptions addCountry={this.addCountry} />
                    </FormGroup>
                  </Col>

                  <Col md={6}>
                    <div className="sign__group">
                      <input
                        value={this.state.phone}
                        onChange={(e) =>
                          this.setState({ phone: e.target.value })
                        }
                        type="text"
                        className="sign__input"
                        placeholder="Phone"
                      />
                    </div>
                  </Col>
                </Row>
                <Row form>
                  <Row>
                    <Col md={12}>
                      <div className="sign__group">
                        <input
                          value={this.state.email}
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                          type="text"
                          className="sign__input"
                          placeholder="Email"
                        />
                      </div>
                      <span
                        style={{
                          display: "block",
                          color: "grey",
                          fontSize: "0.8rem",
                          textAlign: "center",
                        }}
                      >
                        your order will be sent to the email you provide here
                      </span>
                    </Col>

                    {/* <Col md={6}>
									<FormGroup className="dropdown-container ">
										<StateOptions />
									</FormGroup>
								</Col> */}
                  </Row>
                </Row>

                <button
                  type="button"
                  onClick={this.chekout}
                  className="sign__btn"
                >
                  CheckOut
                </button>
              </form>
            </div>
            <div className="col-12 col-lg-4">
              <CheckoutCart
                cart={this.state.cart}
                totalPrice={this.state.totalPrice}
              />
            </div>
          </div>
          {/* end grid content */}
        </div>
      </div>
    );
  }
}
