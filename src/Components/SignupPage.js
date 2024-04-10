import React, { useState } from "react";
import image from "../images/001.png";
import { db } from "../firebase.js";
import { addDoc, collection, doc, setDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignupPage = ({setUserdata}) => {
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [tnc, setTnc] = useState(false);
  const [exist, setExist] = useState(false);
  const navigate = useNavigate();



async function checkUsernameAvailability (username){
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    if(doc.id === username){
      setExist(true);
      console.log("username already exists")
      return;
    }
    else{
      setExist(false);
    }
  });
}

  const onHandleSubmit = async()=>{
    if(tnc){
      checkUsernameAvailability(username)
      if(!exist){
        
        setDoc(doc(collection(db, "users"), username), {
        name: name,
        username: username,
        email: email,
        password: password
      }).then((res)=>{
        console.log(res);
        setUserdata({
          username: username,
          email: email,        
        })
        navigate("/createprofile")
      })
    }
  }
      }
  return (
    <div className="flex">
      <div className="w-[35vw] h-screen bg-[#f1d185]">
        <div className="p-10">
          <div className="text-2xl text-[#89651a]">Dribble</div>
          <div className="uppercase text-3xl text-[#89651a] font-bold ">
            Discover the world's top designers & creatives.
          </div>
        </div>
        <img src={image} alt="banner" className="w-full" />
        <div></div>
      </div>
      <div className="w-[65vw] h-screen">
        <div className="text-right pr-3 pt-1 mb-7">
          Already a member?
          <a href="" className="text-blue-600 underline">
            Signin
          </a>
        </div>
        <div className="flex justify-center"> 
            <div className="w-[45%]">
          <div action="submit" >
              <div className="text-3xl font-bold mb-10">
                Sign up to Dribbble
              </div>
              <div className="w-1">{  }</div>
              <div className="xl:flex justify-between mb-10">
                <div className="flex flex-col xl:mr-4">
                  <label htmlFor="name" className="font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="bg-gray-200 outline-none p-2 rounded"
                    onChange={(e)=> setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="username" className="font-bold">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="bg-gray-200 outline-none p-2 rounded"
                    onChange={(e)=> setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-10">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-200 outline-none p-2 rounded"
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>
              <div className="flex flex-col mb-3">
                  <label htmlFor="password" className="font-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="bg-gray-200 outline-none p-2 rounded"
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                </div>
                <div className="p-1 mb-7">
                  <input type="checkbox" name="tnc" id="tnc" className="h-4 w-4 m-2" onChange={(e) => setTnc(e.target.checked)}/><label htmlFor="tnc">Creating an account means you're okay with our <a href="" className="text-blue-600">Terms of Service, Privacy Policy,</a>  and our default <a href="" className="text-blue-600"> Notification Settings.</a></label>
                </div>
          
                  <button className=" p-2 w-1/2 rounded bg-[#ea4b8b] text-white font-medium mb-5" onClick={()=> onHandleSubmit()}>Create Account</button>
                <div className="text-xs w-2/3">
                This site is protected by reCAPTCHA and the Google <a href="" className="text-blue-600">Privacy Policy</a>  and <a href="" className="text-blue-600">Terms of Service</a>  apply.
                </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
