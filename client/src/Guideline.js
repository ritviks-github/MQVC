import React from 'react'
import { useNavigate } from 'react-router-dom'
import i from './msilExit.jpg'
export default function Guideline() {
    const navigate = useNavigate();
    const home = ()=>{
        navigate('/home');
    }
  return (
    <div>
        <button class='btn btn-primary' onClick = {home}>Back</button>
      <div style={{display:'flex',justifyContent:'center'}}>
        <h1 style={{color:'white',textDecoration:'underline'}}>Market Quality Vendor Convention 2024 Guidelines for Attendees</h1>
      </div>
      <br /><br />
      <h4 style={{marginLeft:'12px',color:'white',textDecoration:'underline'}}>Timings</h4>
      <ul style={{color:'white'}}>
        <li>Registration will start from 01:00 PM onwards. Kindly reach venue & complete registration process before 01:45 PM.</li>
        <li>Event will start at 02:00 PM, Please be seated in conference hall at least 15 min prior</li>
      </ul>
      <h4 style={{marginLeft:'12px',color:'white',textDecoration:'underline'}}>Event Venue/Seating</h4>
      <ul style={{color:'white'}}>
        <li>Table number will be displayed on the Registration desk</li>
        <li>Please be seated as per alloted table number only</li>
        <li>Mobile phones to be kept on silent mode during the event</li>
      </ul>
      <h4 style={{marginLeft:'12px',color:'white',textDecoration:'underline'}}>Safety</h4>
      <ul style={{color:'white'}}>
        <li>Please follow the escape route & exit signs as per the emergency exit plan given below.</li>
        <li>In case of any emergency / any other abnormality kindly contact on emergency numbers given.</li>
        <li>Smoking is strictly prohibited inside the event hall.</li>
      </ul>
      <img src={i} style={{width:'100%'}} alt="" />
    </div>
  )
}
