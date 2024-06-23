import React from 'react'
import logo from './marutiLogo.png';
import { useNavigate } from 'react-router-dom';
import i1 from './car1.jpg';
import i2 from './car2.jpg';
import i3 from './car3.jpg';
import i4 from './registration.png'
import i5 from './venueDetail.png'
import i6 from './agenda.png'
import i7 from './query.png'
import i8 from './feedback.png'
import i9 from './regulation.png'
export default function Home() {
    const navigate = useNavigate();
    const handleGuide = ()=>{
        navigate('/guide');
    }
    const queryHandle = ()=>{
        navigate('/query')
    }
    const venueDetail = ()=>{
        navigate('/venuedetails')
    }
    const handleVenueRegister = ()=>{
        navigate('/attendance');
    }
    const handleLogout = ()=>{
        navigate('/');
    }
    const handleFeed = ()=>{
        navigate('/feed');
    }
    const agenda = ()=>{
        navigate('/agenda');
    }
  return (
    <div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h1 style={{color:'white'}}>MQVC 2024</h1>
            <img src={logo} style={{height:'4em'}} alt="" />
            <button class='btn btn-primary' onClick={handleLogout}>Logout</button>
        </div>
        {/* carousel starts */}
                    <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={i1} class="d-block w-100" style={{height:'30em'}} alt="..." />
                </div>
                <div class="carousel-item">
                <img src={i2} class="d-block w-100" style={{height:'30em'}} alt="..." />
                </div>
                <div class="carousel-item">
                <img src={i3} class="d-block w-100" style={{height:'30em'}} alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        {/* carousel ends */}
        <br /><br /><br /><br />
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                <div onClick={handleVenueRegister} id="main" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <img style={{height:'4em'}} src={i4} alt="" />
                    <span style={{color:'white'}}>Venue Registration</span>
                </div>
                <div onClick={venueDetail} id="main" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <img style={{height:'4em'}} src={i5} alt="" />
                    <span style={{color:'white'}}>Venue Detail</span>
                </div>
                <div onClick={agenda} id="main" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <img style={{height:'4em'}} src={i6} alt="" />
                    <span style={{color:'white'}}>Event Agenda</span>
                </div>
            </div><br /><br />
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                <div onClick={queryHandle} id="main" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <img style={{height:'4em'}} src={i7} alt="" />
                    <span style={{color:'white'}}>My Queries</span>
                </div>
                <div onClick={handleFeed} id="main" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <img style={{height:'4em'}} src={i8} alt="" />
                    <span style={{color:'white'}}>Feedback</span>
                </div>
                <div onClick={handleGuide} id="main" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <img style={{height:'4em'}} src={i9} alt="" />
                    <span style={{color:'white'}}>Guidelines</span>
                </div>
            </div>
        </div>
    </div>
  )
}
