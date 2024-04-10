import React, { useState } from 'react';
import SignupPage from './Components/SignupPage.js';
import CreateProfile from './Components/CreateProfile.js';
import Options from './Components/Options.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from './Components/Verify.js';
import SendEmail from './Components/SendEmail.js';

function App() {
  const [userdata, setUserdata]= useState()
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <SignupPage setUserdata={setUserdata}/>}/>
      <Route path='/createProfile' element={ <CreateProfile userdata={userdata} setUserdata={setUserdata}/>}/>
      <Route path='/options' element= {<Options username={userdata?.username}/>}/>
      <Route path='/verify' element={<Verify/>}/>
      <Route path='/sendEmail' element={<SendEmail userdata={userdata}/>}/>
    </Routes>
   
   
    
    </BrowserRouter>
  );
}

export default App;
