import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Details() {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [compname,setCompname] = useState('');
    const [desig,setDesig] = useState('');
    const controlSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/register',{email,name,compname,desig}).then((res)=>{
            if(res.data === "Done"){
                navigate('/home');
            }
            if(res.data === "error"){
                alert("An error has occoured");
                setEmail('');
                setName('');
                setCompname('');
                setDesig('');
            }
        })
    }
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <form onSubmit={controlSubmit}>
            <div class="mb-3">
                <label style={{color:'silver'}} for="exampleInputEmail1" class="form-label">Email address</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true} />
                <div style={{color:'silver'}} id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Name</span>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control"  aria-describedby="addon-wrapping" />
            </div><br />
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Company Name</span>
                <input type="text" class="form-control" value={compname} onChange={(e)=>setCompname(e.target.value)}  aria-describedby="addon-wrapping" />
            </div><br />
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">Enter Designation</span>
                <input type="text" class="form-control" value={desig} onChange={(e)=>setDesig(e.target.value)} aria-describedby="addon-wrapping" />
            </div><br /><br /><br /><br />
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <button type='submit' class='btn btn-primary'>Submit</button>
            </div>
        </form>
    </div>
  )
}
