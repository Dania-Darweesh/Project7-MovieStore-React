import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';

export default function ProfileWrapper() {
    const navigate=useNavigate()
  return <UserProfile navigate={navigate}/>;
}
