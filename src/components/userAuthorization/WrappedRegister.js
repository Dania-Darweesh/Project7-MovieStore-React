import React from 'react';
import Register from './Register';
import { useNavigate } from 'react-router-dom';

export default function WrappedRegister() {
    const navigate=useNavigate()
  return <Register navigate={navigate}/> ;
}
