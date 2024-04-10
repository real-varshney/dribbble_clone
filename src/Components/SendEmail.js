import React, { useEffect, useState, useRef} from "react";
import { TbBriefcaseOff } from "react-icons/tb";
import { MdMarkEmailRead } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import axios from "axios";


const SendEmail = ({userdata}) => {
  const firstEffectRan = useRef(false);
  useEffect(() => {
    // Create the AbortController inside the useEffect hook
    const abortController = new AbortController();
    const { signal } = abortController;
   
    const fetchData = async () => {
       try {
         const response = await axios({
           url: "https://express-server-oifk.onrender.com/sendemail",
           params: {
             email: userdata?.email,
             username: userdata?.username,
           },
           method: "get",
           signal, // Pass the signal to the request
         });
   
         if (response.status === 200) {
           console.log("Sent email");
         } else {
           console.log("Message Not sent");
         }
       } catch (error) {
         if (axios.isCancel(error)) {
           console.log("Request canceled");
         } else {
           console.log("Error:", error.message);
         }
       }
    };
   
    
    if (firstEffectRan.current) {
      fetchData();
      
    }
    
    // Cleanup function to abort the request if the component unmounts
    return () => {
      firstEffectRan.current = true;
       abortController.abort();
    };
   }, []); // Dependencies array is empty, so this effect runs once on mount
   
  return (
    <div>
      <nav className="flex items-center justify-between border-b border-gray-300">
        <div className="font-bold text-2xl p-5 ">dribbble</div>
        <div className="flex list-none w-[65vw]">
          <li className="text-gray-600 font-bold p-5">Inspiration</li>
          <li className="text-gray-600 font-bold p-5">Find Work</li>
          <li className="text-gray-600 font-bold p-5">Learn Design</li>
          <li className="text-gray-600 font-bold p-5">Hire Designers</li>
        </div>

        <div className="flex items-center p-5 box-border">
          <input
            type="text"
            className="outline-none bg-gray-200 p-1 w-20 rounded-md m-2"
            placeholder="Search"
          />
          <button className="m-2">
            <TbBriefcaseOff size={16} />
          </button>
          <div className="h-6 w-6 m-2">
            <img src={userdata.imageUrl} alt="" className="w-full h-full rounded-full" />
          </div>
          <button className="bg-[#ea4b8b] p-2 px-3 rounded-md text-white font-bold">
            Upload
          </button>
        </div>
      </nav>

      <div className="text-gray-500 flex items-center flex-col mt-10">
        <div className="text-4xl font-bold text-black m-2">
          Please verify your email...
        </div>
        <div className="m-2">
          <MdMarkEmailRead color="#ea4b8b" size={136} />
        </div>
        <div className="m-2">
          Please verify your email address. We've sent a confirmation email to:
        </div>
        <div className="text-black font-bold m-2 mb-4">unt@refero.design</div>
        <div>
          Click the confirmation link in that email to begin using Dribbble.
        </div>

        <div className="w-[50vw] text-center p-1 leading-10">
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          <button className="text-[#ea4b8b]">
            resend the confirmation email
          </button>
          .
        </div>
        <div className="m-2">
          Wrong email address?{" "}
          <button className="text-[#ea4b8b]">Change it</button>.
        </div>
      </div>

      <footer className="flex box-border my-10 p-20 mb-0 mt-20 bg-gray-100">
        <div className="w-[25vw] p-4 m-5">
          <div className="text-2xl text-[#ea4b8b] font-bold mb-4">dribbble</div>
          <div className="mb-5">
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired.
          </div>
          <div className="flex w-full">
            <span className="mx-1"><FaTwitter /></span>
            <span className="mx-1"><FaFacebook /></span>
            <span className="mx-1"><BsInstagram /></span>
            <span className="mx-1"><FaPinterest /></span>
            <span className="mx-1"><FaReddit /></span>
          </div>
        </div>
        <div className="list-none w-[15vw] m-5 leading-8">
          <div className="font-bold">For designers</div>
          <li>Go Pro!</li>
          <li>Explore design work</li>
          <li>Design blog</li>
          <li>Overtime podcast</li>
          <li>Playoffs</li>
          <li>Weekly Warm-Up</li>
          <li>Refer a Friend</li>
          <li>Code of conduct</li>
        </div>

        <div className="list-none w-[15vw] m-5 leading-8">
          <div className="font-bold">Hire designers</div>
          <li>Post a job opening</li>
          <li>Post a freelance project</li>
          <li>Search for designers</li>

          <div className="font-bold">Brands</div>
          <li>Advertise with us</li>
        </div>
        <div className="list-none w-[15vw] m-5 leading-8">
          <div className="font-bold">Company</div>
          <li>About</li>
          <li>Careers</li>
          <li>Support</li>
          <li>Media kit</li>
          <li>Testimonials</li>
          <li>API</li>
          <li>Terms of service</li>
          <li>Privacy policy</li>
          <li>Cookie policy</li>
        </div>
        <div className="list-none w-[15vw] m-5 leading-8">
          <div className="font-bold">Directories</div>
          <li>Design jobs</li>
          <li>Designers for hire</li>
          <li>Freelance designers for hire</li>
          <li>Tags</li>
          <li> Places</li>

          <div className="font-bold">Design assets</div>
          <li>Dribbble Marketplace</li>
          <li>Creative Market</li>
          <li>Fontspring</li>
          <li>Font Squirrel</li>
        </div> 
        <div className="list-none w-[15vw] m-5 leading-8">
          <div className="font-bold">Design Resources </div>
          <li>Freelancing</li>
          <li>Design Hiring</li>
          <li>Design Portfolio</li>
          <li>Design Education</li>
          <li>Creative Process</li>
          <li>Design Industry Trends</li>
        </div>
      </footer>
    </div>
  );
};

export default SendEmail;
