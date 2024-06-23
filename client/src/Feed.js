import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
export default function Feed() {
    const navigate = useNavigate();
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [num3,setNum3] = useState(0);
    const [num4,setNum4] = useState(0);
    const [num5,setNum5] = useState(0);
    const [num6,setNum6] = useState(0);
    const [suggest,setSuggest] = useState('');
    const goHome = ()=>{
        navigate('/home');
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/feedbacks',{num1,num2,num3,num4,num5,num6,suggest}).then((res)=>{
            if(res.data === "Feed Shared"){
                alert("Feedback Given :)");
                navigate('/home');
            }
            if(res.data === "Error"){
                alert("An error occoured, try again after some time");
                navigate('/home');
            }
        }).catch((err)=>{
            alert("An error has occoured, try again after some time");
            navigate('/home');
        })
    }
  return (
    <div>
      <button class='btn btn-primary' onClick={goHome}>Back</button><br /><br />
      {/* feedback form goes here */}
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',height:'80vh',justifyContent:'space-around'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{color:'white'}}>How do you rate the Market Quality Vendor Convention (MQVC) Initiative</h4>
                <input value={num1} onChange={(e)=>setNum1(e.target.value)} required ={true} type="number" min="0" max="5" />
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{color:'white'}}>Is the information shared useful for market defect analysis?</h4>
                <input value={num2} onChange={(e)=>setNum2(e.target.value)} required ={true} type="number" min="0" max="5" />
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{color:'white'}}>How do you rate the initiative of Best Practices Sharing Session</h4>
                <input value={num3} onChange={(e)=>setNum3(e.target.value)} required={true} type="number" min="0" max="5" />
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{color:'white'}}>How do you rate the format of Interactive survey (Mentimeter) session & its content?</h4>
                <input value={num4} onChange={(e)=>setNum4(e.target.value)} required={true} type="number" min="0" max="5" />
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{color:'white'}}>How do you rate the Panel Discussion</h4>
                <input value={num5} onChange={(e)=>setNum5(e.target.value)} required = {true} type="number" min="0" max="5" />
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h4 style={{color:'white'}}>How do you rate the Overall arrangements (Venue, Food ,Seating etc.)</h4>
                <input value={num6} onChange={(e)=>setNum6(e.target.value)} required={true} type="number" min="0" max="5" />
                </div>
                <div class="form-group">
                    <label style={{color:'white'}} for="exampleFormControlTextarea1">Improvement suggestion, if any</label>
                    <textarea value={suggest} onChange={(e)=>setSuggest(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div><br />
                <button class='btn btn-primary' type='submit'>Submit</button>
        </form>
      {/* feedback form closed here */}
    </div>
  )
}
