import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Authentication/SignUp/Signup';
import Login from './Authentication/LogIn/Login';
import ResetPassword from './Authentication/ResetPassword/ResetPassword';
import Header from './Components/Header/Header';
import Successful from './Authentication/Successful/Successful';
// import Input from './Common/Input/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Input /> */}
        <Route exact path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Successful />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
