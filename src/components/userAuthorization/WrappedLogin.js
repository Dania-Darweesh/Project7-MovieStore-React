import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

export default function WrappedLogin(props) {
  const navigate=useNavigate()
  return(
      <Login navigate={navigate}/>
  )
}
