import React from 'react'
import a1 from './agenda1.jpg'
import a2 from './agenda2.jpg'
import a3 from './agenda3.jpg'
import { useNavigate } from 'react-router-dom'
export default function Agenda() {
    const navigate = useNavigate();
    const home = ()=>{
        navigate('/home')
    }
  return (
    <div>
        <button class='btn btn-primary' onClick={home}>Back</button>
        <div style={{display:'flex',justifyContent:'center'}}>
            <h1 style={{color:'white'}}>Event Agenda</h1>
        </div>
        <img src={a1} style={{width:'100%'}} alt="" />
        <img src={a2} style={{width:'100%'}} alt="" />
        <img src={a3} style={{width:'100%'}} alt="" />
    </div>
  )
}
