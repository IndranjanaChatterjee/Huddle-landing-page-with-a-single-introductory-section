import React from 'react';
import img from "../assets/images/illustration-mockups.svg";
import logo from "../assets/images/logo.svg";

export default function Main() {
  return (
    <>
    <img src={logo} alt="" />
    <section className='main flex flex-row justify-center items-center'>
        
        <img src={img} alt="" />
        <div>
        <h2>Build The Community Your Fans Will Love</h2>

<p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
Create connections with your users as you engage in genuine discussion.</p>  

<button>Register</button>

        </div>
      
    </section>
    </>
  )
}
