import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Authentication/SignUp/Signup';
import Login from './Authentication/LogIn/Login';
import ForgotPassword from './Authentication/ForgotPassword/ForgotPassword';
import Verification from './Authentication/VerificationCode/Verification';
import Header from './Components/Header/Header';
import Successful from './Authentication/Successful/Successful';
import CreatePost from './Container/CreatePost/CreatePost';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ResetPassword from './Authentication/ResetPassword/ResetPassword';
import EditProfilePage from './pages/EditProfilePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import RequireAuth from './Components/RequireAuth';
// import Input from './Common/Input/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Input /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Successful />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/verify-code" element={<Verification />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
