import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Attendance() {
    const [passcode,setPasscode] = useState('');
    const navigate = useNavigate();
    const [number,setNumber] = useState('');
    const home = ()=>{
      navigate('/home')
    }
    const handleonSubmit = (e)=>{
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
          axios.post('http://localhost:3001/attend',{passcode,number}).then((res)=>{
            if(res.data === "Present"){
                alert("You have been marked present for the event");
                navigate('/home');
            }
            if(res.data === "D"){
                alert("Your presence has been marked already :)");
                navigate('/home');
            }
          }).catch((err)=>{
            alert("An error has occoured, try again after a while");
            navigate('/home');
          })
         
    }
  return (
    <>
    <button class='btn btn-primary' onClick={home}>Back</button>
    <form id="phoneForm" onSubmit={handleonSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'90vh'}}>
      <h4 style={{color:'white'}}>Passcode will be provided at venue reception:</h4>
      <input type="text" class="form-control" value={passcode} onChange={(e)=>setPasscode(e.target.value)}  aria-describedby="addon-wrapping" />
      <br />
      <input type="tel" value={number} onChange={(e)=>setNumber(e.target.value)} class="form-control" id="phoneInput" pattern="^\+?[0-9\s\-]{7,15}$" placeholder="Enter phone number" required = {true} />
      <br /><br /><br /><br />
      <button type='submit' class='btn btn-primary'>Mark my Presence</button>
    </form>
    </>
  )
}
