import React, { useEffect , useState} from "react";
import { TbBriefcaseOff } from "react-icons/tb";
import image from "../images/001.png";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import axios from "axios";
import { collection, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js";

const Verify = () => {

  const [verificationStatus, setVerificationStatus] = useState({
    status: "",
    message: ""
  });

  useEffect(() => {
     const urlParams = new URLSearchParams(window.location.search);
     const username = urlParams.get('username');
     const token = urlParams.get('token');
     console.log(username, token)
 
     if (username && token) {


      // const data = await getDoc(collection(db, "users"), username)
      // console.log(data)
      
       axios.get(`https://express-server-oifk.onrender.com/verify?username=${username}&token=${token}`)
         .then(response => {
           setVerificationStatus({status: '200', message: response.data.message});
           updateDoc(doc(collection(db, "users"), username), {
            verified: true
           })
         })
         .catch(error => {
           setVerificationStatus({status: '400', message: 'Error verifying email 400'});
         });
     }
     else{
      setVerificationStatus({status: '500', message: 'This Web Service is not available'})
     }
  }, []);


  if(verificationStatus.status === '200'){
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
              <img src={image} alt="" className="w-full h-full rounded-full" />
            </div>
            <button className="bg-[#ea4b8b] p-2 px-3 rounded-md text-white font-bold">
              Upload
            </button>
          </div>
        </nav>
  
        <div className="text-gray-500 flex items-center flex-col mt-10">
        <div className="m-2">
          <IoCheckmarkDoneOutline color="#ea4b8b" size={136} />
        </div>
          <div className="w-[50vw] text-center p-1 leading-10">
            {verificationStatus.message}
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
  }
  else if(verificationStatus.status === '400'){
    return(
      <div className="text-6xl h-screen w-screen flex items-center justify-center">
        {verificationStatus.message}
      </div>
    )

  }
  else{
    return(
      <div className="text-6xl h-screen w-screen flex items-center justify-center">
        {verificationStatus.message}
      </div>
    )

  }



}
  
 

export default Verify;
