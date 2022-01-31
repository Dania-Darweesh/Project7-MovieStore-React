import React from "react";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Successful() {
    const navigate=useNavigate();
    const TIME_TO_REDIRECT=10 //in seconds
    const moveToHome=()=>{
        navigate('/')
    }
    useEffect(()=>{
        setInterval(moveToHome,TIME_TO_REDIRECT*1000)
    })
 
  return (
    <div className="sign section--bg" data-bg="img/section/section.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sign__content">
              <h4
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "2.8rem",
                  padding: "4rem 0rem",
                  marginTop: "20px",
                }}
                className="col-lg-12"
              >
                Thank you for purchasing
                <span
                style={{
                    display:'block',
                    color:'grey',
                    fontSize:'1.5rem'
                }}
                >You can see your order in you email</span>
                <span
                style={{
                    display:'block',
                    color:'grey',
                    fontSize:'2rem',
                    marginTop:'1rem'
                }}
                
                >
                    
                    redirecting
                  
                </span>
                <Spinner small={true}/>

              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
