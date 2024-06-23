import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function VenueDetails() {
    const navigate = useNavigate();
    const back = ()=>{
        navigate('/home');
    }
  return (
    <div>
        <button onClick={back} class='btn btn-primary'>Back To Home</button><br /><br />
      <iframe title="Manesar plant MSIL" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.6699978259194!2d76.88742427474145!3d28.36882499600848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e5bee8066b1%3A0xb4dc0589fb051f11!2sMaruti%20Suzuki%20India%20Limited%20Manesar!5e0!3m2!1sen!2sin!4v1719110733713!5m2!1sen!2sin" width="100%" height="550" style={{border:"0", allowfullscreen:"true", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
    </div>
  )
}
