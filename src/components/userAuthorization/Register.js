import React, { Component } from "react";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import * as validate from '../../validate';
import Spinner from "../Spinner";
import { loadScripts } from "../../loadScripts";
import Error from "../Error";
import './sectionBackground.css'
import Helmet from "react-helmet";
import { getFromDatabase } from "../../order";
import { Link } from "react-router-dom";
export default class Register extends Component {
 
  state = {
    name: "",
    email: "",
    password: "",
    error:{body:"",email:"",password:""},
    loading:false,
    checkout:false
  };
  componentDidMount(){
    window.scrollTo(0,0);
    //check if the user cam from the checkout page
    const checkoutCheck=localStorage.getItem('checkout');
    if(checkoutCheck && checkoutCheck==='true'){
      this.setState({checkout:true})
      localStorage.removeItem('checkout')

    }
  }
  renderError=(message)=>{
    
    
    if(message.startsWith('Email'))this.setState(prevState=>{
      return {error:{...prevState.error,email:message}}
    });
    else if(message.startsWith('Password'))this.setState(prevState=>{
      return {error:{...prevState.error,password:message}};
    });
    else this.setState(prevState=>{
      return {error:{...prevState.error,body:message}};
    });
  
    

    
  } 
  
   registerUser=async(email,password)=> {
      try{
       const user= await createUserWithEmailAndPassword(auth,email,password);
       updateProfile(auth.currentUser, {
        displayName: this.state.name, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        this.setState({error:{body:"",email:"",password:"",checkout:false}})
        if(localStorage.getItem('checkout')){
          localStorage.removeItem('checkout');
          this.props.navigate(-1)
        }
        else{
          this.props.navigate('/');
        }
        
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
     
       

      }

      catch(err){
        console.log(err);
        this.setState({loading:false});
        const error=err.message
        console.log(error);
        this.renderError(error);
        

      }
 
}


validateUser=()=>{
  try{
    validate.validateFullName(this.state.name);
    this.setState({error:{...this.state.error,body:''}})
    //validate empty
  validate.validateEmail(this.state.email);
  //empty error if email is valid
  
  this.setState({error:{...this.state.error,email:''}});
  //password validation
  validate.validatePassword(this.state.password);
  //empty error
  this.setState({error:{...this.state.error,password:''}});
  return true;

  }
  catch(error){
   

    this.setState({loading:false});
    this.renderError(error.message);

  }
}

  register=(e)=>{
    this.setState({loading:true})
	  e.preventDefault();
    if(this.validateUser()){
    this.registerUser(this.state.email,this.state.password);
      
    

    
    
  }
    
  }
  signIn=(e)=>{
	  e.preventDefault();
 
	  // go to register page

  }
  render() {
    return (
      <>
      <Helmet>
      <script defer  src="%PUBLIC_URL%/js/bootstrap.bundle.min.js"></script>
      </Helmet>
      <div className="sign section--bg" data-bg="img/section/section.jpg">
      {this.state.loading?<Spinner container='spinner_container' spinner_item='spinner_item' background='background'/>:''} 
        <div  className="container">
          <div className="row">
          
            
            <div className="col-12">
            
              <div className="sign__content">
                
             
                <form action="#" className="sign__form" style={{marginTop:'50px'}}>
                {this.state.checkout &&  <h4 className="col-lg-12 signin_before_checkout_message" style={{color: 'red', textAlign: 'center' , fontSize:'1rem',padding:'0rem 0rem', marginTop:'0',marginBottom:'20px'}}>you need to sign in to continue your order</h4>}
                  <a href="index.html" className="sign__logo">
                    <img src="img/logo.svg" alt="" />
                  </a>

                   <div className="sign__group">
                    <input
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                      type="text"
                      className="sign__input"
                      placeholder="Name"
                    />
                  </div> 

                  <div className="sign__group">
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      className="sign__input"
                      placeholder="Email"
                    />
                    <Error error={this.state.error.email}/>
                  </div>

                  <div className="sign__group">
                    <input
                      
                      type="password"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                      className="sign__input"
                      placeholder="Password"
                    />
                      
                  </div>
                  <Error error={this.state.error.password}/>
                
                  <Error error={this.state.error.body}/>
                
                  
                

                

                  <button onClick={this.register} className="sign__btn" type="button">
                    Sign up
                  </button>
                
               
             
                 


                  <span className="sign__text">
                    Already have an account? <Link to='../login'>Sign in!</Link> 
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
