import React from 'react';
import './Login.css';
import logo from './marutiLogo.png';
import i1 from './loginimg.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function Login() {
    const [number,setNumber] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        document.getElementById('phoneForm').addEventListener('submit', function(event) {
            var phoneInput = document.getElementById('phoneInput');
            var phoneNumber = phoneInput.value;
          
            // Basic phone number validation regex
            var phoneRegex = /^\+?[0-9\s\-]{7,15}$/;
          
            if (!phoneRegex.test(phoneNumber)) {
              alert('Please enter a valid phone number.');
              event.preventDefault(); // Prevent form submission
            }
          });
          axios.post('http://localhost:3001/numberlog',{number}).then((res)=>{
            if(res.data === "created"){
                navigate('/details');
            }
            else if(res.data === "You are logged in"){
                navigate('/home');
            }
          });
    }
  return (
    <div className="login-container">
        <div style={{display:'flex',justifyContent:'center'}}>
      <div className="logo-container">
        <img src={logo} className="logo" alt="Maruti Logo" />
        <h1 className="title">MARUTI SUZUKI</h1>
      </div>
      </div>
      <div className="image-container">
        <img src={i1} className="responsive-image" alt="Login Illustration" />
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h3 style={{color:'white'}}>MQVC 2024</h3><br />
        <form onSubmit={handleSubmit} id="phoneForm">
            <input type="tel" value={number} onChange={(e)=>setNumber(e.target.value)} class="form-control" id="phoneInput" pattern="^\+?[0-9\s\-]{7,15}$" placeholder="Enter phone number" required = {true} />
            <br />
            <button class='btn btn-primary' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
