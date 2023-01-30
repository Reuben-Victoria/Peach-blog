import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import Signup from '../Authentication/SignUp/Signup';
import Login from '../Authentication/LogIn/Login';
import ForgotPassword from '../Authentication/ForgotPassword/ForgotPassword';
import Verification from '../Authentication/VerificationCode/Verification';
import ViewPostPage from '../pages/ViewPostPage';
// import Header from '../Components/Header/Header';
// import Success from '../Components/Success/Success';
import CreatePostPage from '../pages/CreatePostPage';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';
import ResetPassword from '../Authentication/ResetPassword/ResetPassword';
import EditProfilePage from '../pages/EditProfilePage';
import EditPostPage from '../pages/EditPostPage';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PreventRoutes from '../utils/PreventRoutes';
import { ToastContainer } from 'react-toastify';
import Header from '../Components/Header/Header';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route element={<PreventRoutes />}>
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route exact path="/" element={<HomePage />} />
            <Route path="/edit-profile/:userId" element={<EditProfilePage />} />
            <Route path="/view-post/:postId" element={<ViewPostPage />} />
            <Route path="/edit-post/:postId" element={<EditPostPage />} />
            <Route path="/create-post" element={<CreatePostPage />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset_password/:token" element={<ResetPassword />} />
          <Route path="/verify-code/:email" element={<Verification />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default Router;
