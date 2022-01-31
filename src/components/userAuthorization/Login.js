import React, { Component } from "react";
import { auth } from "./firebase";
import * as validate from '../../validate';
import Spinner from "../Spinner";
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import Error from "../Error";

export default class Login extends Component {
  state = {
  email: "",
	password:'',
  loading:false,
  error:{body:"",email:"",password:""},
  
  };
  componentDidMount(){
    window.scrollTo(0,0);
    // redirect user if logged in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.props.navigate('/')
        
      }
      else{
        this.setState({showForm:true})
      }
       

    });
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
  SingninUser=async(email,password)=> {
    try{
     const userCredentials= await signInWithEmailAndPassword(auth, email, password);
      return userCredentials

    }

    catch(err){
      this.setState({loading:false});
      const error=err.code.split('/')
      this.renderError(error[1]);
      

    }

}

  validateUser=()=>{
    try{
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
  signIn=async(e)=>{
	  e.preventDefault();
    this.setState({loading:true})
    if(this.validateUser()){
      const user=await this.SingninUser(this.state.email,this.state.password);
      if(!user)return 
      this.setState({error:{body:"",email:"",password:""}});
      this.props.navigate('/');

     
   


    }
 
	  // go to register page

  }


  render() {
    return (
      <div   className="sign section--bg" data-bg="img/section/section.jpg">
          {this.state.loading?<Spinner container='spinner_container' spinner_item='spinner_item' background='background'/>:''} 
        <div style={{opacity:this.state.loading?'0.4':'1'}} className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                <form action="#" className="sign__form">
                  <a href="index.html" className="sign__logo">
                    <img src="img/logo.svg" alt="" />
                  </a>

                  <div className="sign__group">
                    <input
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      type="text"
                      className="sign__input"
                      placeholder="Email"
                    />
                  </div>
                  <Error error={this.state.error.email}/>

                  <div className="sign__group">
                    <input
                      type="password"
					  value={this.state.password}
					  onChange={(e) => this.setState({ password: e.target.value })}
                      className="sign__input"
                      placeholder="Password"
                    />
                  </div>

                  <div className="sign__group sign__group--checkbox">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      checked="checked"
                    />
                    <label for="remember">Remember Me</label>
                  </div>

                  <button onClick={this.signIn} type="submit" className="sign__btn" type="button">
                    Sign in
                  </button>
                  <Error error={this.state.error.password}/>
                  <Error error={this.state.error.body}/>
                  

                  <span className="sign__text">
                    Don't have an account? <a href="signup.html">Sign up!</a>
                  </span>

                  <span className="sign__text">
                    <a href="forgot.html">Forgot password?</a>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
