import React from "react";
import img from "../assets/images/illustration-mockups.svg";
import logo from "../assets/images/logo.svg";
import fb from "../assets/images/facebook-f.svg";
import twit from "../assets/images/twitter.svg";
import insta from "../assets/images/instagram.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
  return (
    <>
    <section className="flex flex-col justify-center items-start  w-[90%] gap-[5rem]">
      <img src={logo} alt="" className="w-[10rem]"/>
      <section className="main flex flex-row justify-center items-center ">
        <img src={img} alt="" />
        <div>
          <h2 className="text-[#fffdff]">Build The Community Your Fans Will Love</h2>

          <p className="para text-[#fffdff]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <button className="bg-[#fffdff] text-[#57488e] w-[9rem] text-center h-[2.5rem] p-[1rem] flex flex-row justify-center items-center rounded-[2rem]">Register</button>
          <div className="flex flex-row items-center justify-center md:justify-end  gap-[1rem]">
          <div className="border-solid border-white border-[2px] rounded-full w-[2rem] h-[2rem] flex flex-row justify-center items-center"><img src={fb} alt="" className="w-[0.7rem]"/></div>
          <div className="border-solid border-white border-[2px] rounded-full w-[2rem] h-[2rem] flex flex-row justify-center items-center"><img src={twit} alt="" className="w-[1rem]"/></div>
          <div className="border-solid border-white border-[2px] rounded-full w-[2rem] h-[2rem] flex flex-row justify-center items-center"><img src={insta} alt="" className="w-[1rem]"/></div>
          </div>
          
        </div>
      </section>
      </section>
    </>
  );
}
