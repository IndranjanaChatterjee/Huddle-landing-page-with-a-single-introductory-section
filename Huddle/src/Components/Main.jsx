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
    <section className="flex flex-col justify-center items-start  w-[90%] gap-[5rem] ">
      <img src={logo} alt="" className="w-[12rem] my-[1.2rem]"/>
      <section className="main flex flex-row justify-center items-start gap-[5rem] flex-wrap lg:flex-nowrap w-full">
        <img src={img} alt=""  />
        <div className="flex flex-col  justify-center lg:items-start items-center">
          <h2 className="text-[#fffdff] text-[2.8rem] text-center lg:text-left">Build The Community Your Fans Will Love</h2>

          <p className="para text-[#fffdff] my-[1.5rem] text-[1.3rem] text-center lg:text-left">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <button className="bg-[#fffdff] text-[#57488e] lg:w-[9rem] w-[15rem] text-center lg:h-[3rem] h-[3rem] p-[1rem] flex flex-row justify-center items-center rounded-[2rem]">Register</button>
          <div className="flex flex-row  w-full items-center lg:justify-end justify-center gap-[1rem] mt-[5rem] mb-[1rem]">
          <div className="border-solid border-white border-[2px] rounded-full w-[2rem] h-[2rem] flex flex-row justify-center items-center hover:cursor-pointer hover:border-[#f854c3]"><img src={fb} alt="" className="w-[0.7rem] hover:fill-black"/></div>
          <div className="border-solid border-white border-[2px] rounded-full w-[2rem] h-[2rem] flex flex-row justify-center items-center hover:cursor-pointer hover:border-[#f854c3]"><img src={twit} alt="" className="w-[1rem]"/></div>
          <div className="border-solid border-white border-[2px] rounded-full w-[2rem] h-[2rem] flex flex-row justify-center items-center hover:cursor-pointer hover:border-[#f854c3]"><img src={insta} alt="" className="w-[1rem]"/></div>
          </div>
          
        </div>
      </section>
      </section>
    </>
  );
}
