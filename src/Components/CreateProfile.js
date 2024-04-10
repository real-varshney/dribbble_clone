import React, { useState } from "react";
import { BiSolidCameraPlus } from "react-icons/bi";
import { LiaGreaterThanSolid } from "react-icons/lia";
import axios from "axios";
import { db } from "../firebase.js";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CreateProfile = ({ userdata, setUserdata }) => {
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const [percentage, setPercentage] = useState(0);
  const [uploadclicked, setUploadclicked] = useState(false);
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const username = "Nondol";

  const handleinput = (e) => {
    if (e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImage(e.target.files[0]);
      setUrl(url);
    }
  };
  const handleupload = async () => {
    setUploadclicked(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "stutqw7b");

    axios({
      url: "https://api.cloudinary.com/v1_1/dbhr7sqcx/image/upload",
      method: "POST",
      data: formData,
      onUploadProgress: function (e) {
        console.log(e.loaded / e.total);
        setPercentage(e.loaded / e.total);
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          updateDoc(doc(collection(db, "users"), username), {
            imageUrl: res?.data?.url,
            location: location,
          })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

          setImageUrl(res?.data?.url);
          setUserdata({
            ...userdata,
            imageUrl: res.data?.url,
          });
          navigate("/options");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <nav className="block pl-10 my-10 text-2xl text-[#ea4b8b]">dribbble</nav>

      <div className="flex justify-center w-screen">
        <div className="w-[40vw]">
          <div className="text-4xl font-bold mb-3">
            Welcome! Let's create your profile
          </div>
          <div className="text-gray-500 mb-10">
            Let's other get to know you better! You can do these later
          </div>

          <div className="text-2xl font-bold mb-6">Add an avatar</div>

          <div className="flex mb-10">
            {url === undefined || null ? (
              <button className="h-36 stroke-2    aspect-square border-dashed rounded-full border border-[#9d9ea7] flex justify-center items-center">
                <BiSolidCameraPlus size={20} color="#9d9ea7" />
              </button>
            ) : !uploadclicked ? (
              <button className="h-36 stroke-2    aspect-square  rounded-full border border-[#9d9ea7] flex justify-center items-center">
                <img src={url} alt="" className="h-full w-full rounded-full" />
              </button>
            ) : (
              <button className="h-36 stroke-2    aspect-square  rounded-full border border-[#9d9ea7] flex justify-center items-center">
                <div className="absolute z-2 font-bold bg-[#ea4b8b] text-white rounded-full w-12 h-12 flex items-center justify-center">
                  {(percentage * 100).toFixed(0)}%
                </div>
                <img
                  src={url}
                  alt=""
                  className="h-full w-full rounded-full bg-transparent"
                />
              </button>
            )}

            <div className="ml-7">
              <div className="mb-5">
                <input
                  type="file"
                  className="absolute -z-10 opacity-0"
                  id="upload"
                  onChange={(e) => handleinput(e)}
                  accept="image/jpeg, image/png, image/jpg"
                />

                <label
                  htmlFor="upload"
                  className="border border-gray-300 rounded-md p-2 font-bold cursor-pointer"
                >
                  Choose image
                </label>
              </div>
              <div className="text-sm font-semibold text-gray-400 mb-6">
                <span className="mr-3">&gt;</span>Or choose from our defaults
              </div>
            </div>
          </div>

          <div className="text-2xl font-bold mb-6">Add your location</div>
          <input
            type="text"
            name="location"
            id="location"
            className="border-b-2 outline-none focus:border-black w-[85%] mb-10"
            placeholder="Enter a Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="flex flex-col w-1/3 items-center">
            <button
              className="p-1 w-full rounded-md font-bold text-white bg-[#ea4b8b]"
              onClick={() => handleupload()}
            >
              Next
            </button>
            <div className="text-xs text-gray-400 font-bold mt-2">
              or Press RETURN
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CreateProfile;
