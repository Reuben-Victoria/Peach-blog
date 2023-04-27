import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import Signup from '../authentication/signUp/Signup';
import Login from '../authentication/logIn/Login';
import ForgotPassword from '../authentication/forgotPassword/ForgotPassword';
import Verification from '../authentication/verificationCode/Verification';
import ViewPostPage from '../pages/ViewPostPage';

import CreatePostPage from '../pages/CreatePostPage';
import ProfilePage from '../pages/ProfilePage';
import Home from '../container/home/Home';
import ResetPassword from '../authentication/resetPassword/ResetPassword';
import EditProfilePage from '../pages/EditProfilePage';
import EditPost from '../container/editPost/EditPost';

import 'react-toastify/dist/ReactToastify.css';
import PreventRoutes from '../utils/preventRoutes';
import { ToastContainer } from 'react-toastify';
import Header from '../components/header/Header';
import PostsNotFoundPage from '../pages/PostsNotFoundPage';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route element={<PreventRoutes />}>
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/edit-profile/:userId" element={<EditProfilePage />} />
            <Route path="/not-found" element={<PostsNotFoundPage />} />
            <Route path="/view-post/:postId" element={<ViewPostPage />} />
            <Route path="/edit-post/:postId" element={<EditPost />} />
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
