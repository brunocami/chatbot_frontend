import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'
import { useNavigate } from 'react-router-dom'; // Importa usenavigate para redireccionar
import Form from './signInForm/Form.js'
import './signInForm/Form.css'
import img2 from '../assets/img-2.svg'


const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  function submitForm() {
    setIsSubmitted(true);
  }


  useEffect(() => {
    const userloged = sessionStorage.getItem('user');
    if (userloged) {
      submitForm()
    }

    if (isSubmitted) {
      navigate('/'); // Redirecciona a la ruta '/home'
    }
  }, [isSubmitted, navigate])

  return (
    <>
      <div className="form-container">
        <span className="close-btn">
          <Link to='/' className='text-light' style={{textDecoration: "none"}}>x</Link>
        </span>
        <div className="form-content-left">
          <img src={img2} className="form-img" />
        </div>
        <Form submitForm={submitForm} />
      </div>
    </>
  )
}

export default SignUp