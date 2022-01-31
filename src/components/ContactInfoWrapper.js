import React from 'react';
import ContactInfo from './ContactInfo';
import { useNavigate } from 'react-router-dom';

export default function ContactInfoWrapper() {
    const navigate=useNavigate()
  return <ContactInfo navigate={navigate}/>;
}
