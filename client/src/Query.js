import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Query() {
    const [question,setQuestion] = useState('');
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
        axios.post('http://localhost:3001/query',{question,number}).then((res)=>{
            if(res.data === "Query Submitted"){
                alert("Query Submitted :)");
                alert("To submit more queries, fill out this form again");
                setQuestion('');
            }
            if(res.data === "Error"){
                alert("Unexpected error has occoured");
                setQuestion('');
                setNumber('');
            }
        })
    }
    const backHome = ()=>{
        navigate('/home');
    }
  return (
    <>
        <button class='btn btn-primary' onClick={backHome}>Back</button>
    <div style={{display:'flex',flexDirection:'column',height:'90vh',justifyContent:'space-evenly'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h3 style={{color:'white'}}>My Queries</h3>
        </div>
        <form id='phoneForm' onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <input placeholder='Enter you Query' value={question} onChange={(e)=>setQuestion(e.target.value)} type="text" class="form-control" aria-describedby="addon-wrapping" required={true} />
            <br />
            <input type="tel" value={number} onChange={(e)=>setNumber(e.target.value)} class="form-control" id="phoneInput" pattern="^\+?[0-9\s\-]{7,15}$" placeholder="Enter phone number" required = {true} />
            <br /><br /><br /><br />
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}
