import React, { useState } from "react";
import image1 from "../images/02.png";
import image2 from "../images/03.png";
import image3 from "../images/04.png";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { collection, updateDoc , doc} from "firebase/firestore";
import { db } from "../firebase.js";

const Options = ({username}) => {
  const navigate = useNavigate();
  const[jobs, setJobs] = useState([])
  const onHandleSubmit = () => {
    updateDoc(doc(collection(db, "users"), username), {
      job: jobs
    })
    navigate("/sendemail");
  }

  const handleChange = (e)=>{
    const isChecked = e.target.checked;
    if(isChecked) {
      setJobs([...jobs, e.target.value])
    }
    else{
      const newArray = jobs.filter(job => job !== e.target.value)
      setJobs(newArray)
    }
  }
  return (
    <div>
      <nav className="block pl-10 my-10 text-2xl text-[#ea4b8b]">
        <span className="mr-3">dribbble
            </span>
      <button className="bg-gray-200 text-gray-600 aspect-square h-10 rounded text-center">&lt;</button>
      </nav>
      <div className="flex justify-center mb-10">
        <div className="flex flex-col w-[50vw] items-center">
          <div className="text-4xl font-bold mb-5">
            What brings you to Dribbble?
          </div>
          <div className="text-gray-500">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </div>
        </div>
      </div>

<div className="flex justify-center mb-10">
      <div className="flex w-[75vw] justify-evenly" >
        <label className="border border-gray-300 rounded-2xl p-3 flex flex-col items-center aspect-square h-[40vh]" htmlFor="designer">
          <img src={image3} alt="" className="w-full h-2/3"/>
          <div className="font-bold text-xl text-center mb-2 ">
          I'm a designer looking to <br /> share my work
          </div>
          <input type="checkbox" name="option" id="designer" value="designer" className="size-6 rounded-full" onChange={(e)=> handleChange(e)}/>
        </label>
        <label className="border border-gray-300 rounded-2xl aspect-square p-3 flex flex-col items-center  h-[40vh] checked:border-black" htmlFor="Client">
          <img src={image1} alt="" className="w-full h-2/3"/>
          <div className="font-bold text-xl text-center mb-2">
            I'm looking to hire a <br /> designer
          </div>
          <input type="checkbox" name="option" id="Client" value="Client" className="size-6 rounded-full" onChange={(e)=> handleChange(e)}/>
        </label>
        <label className="border border-gray-300 rounded-2xl aspect-square p-3 flex flex-col items-center  h-[40vh] checked:border-black" htmlFor="inspire">
          <img src={image2} alt="" className="w-full h-2/3"/>
          <div className="font-bold text-xl text-center mb-2">
          I'm looking for design <br />
           inspiration
          </div>

          <input type="checkbox" name="option" id="inspire" value="inspire" className="size-6 rounded-full bg-[#ea4b8b]" onChange={(e)=> handleChange(e)}/> 
        </label>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold mb-5">Anything Else? You can select multiple</div>
        <div className="w-[14%]">  <button className="p-1 w-full rounded-md font-bold text-white bg-[#ea4b8b]" onClick={()=>onHandleSubmit()}>Finish</button></div>
        <div className="text-xs text-gray-400 font-bold mt-2">
        or Press RETURN
            </div>
      </div>
    </div>
  );
};

export default Options;
