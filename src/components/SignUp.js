import { useEffect, useState } from 'react';
import React from 'react'
import Form from './signUpForm/Form.js'
import FormSuccess from './signUpForm/FormSuccess.js'
import './signUpForm/Form.css'
import img2 from '../assets/img-2.svg'

const SignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    useEffect(() => {
        const userloged = sessionStorage.getItem('user');
        if (userloged) {
            submitForm()
        } 
    },[isSubmitted])

    return (
        <>
            <div className="form-container">
                <span className="close-btn">x</span>
                <div className="form-content-left">
                    <img src={img2} className="form-img" />
                </div>
                {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
            </div>
        </>
    )
}

export default SignUp