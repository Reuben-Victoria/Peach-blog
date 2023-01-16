import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Authentication/SignUp/Signup';
import Login from './Authentication/LogIn/Login';
import ForgotPassword from './Authentication/ForgotPassword/ForgotPassword';
import Verification from './Authentication/VerificationCode/Verification';
import ViewPost from './Container/ViewPost/ViewPost';
import Header from './Components/Header/Header';
// import Success from './Components/Success/Success';
import CreatePostPage from './pages/CreatePostPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ResetPassword from './Authentication/ResetPassword/ResetPassword';
import EditProfilePage from './pages/EditProfilePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PreventRoutes from './utils/PreventRoutes';
// import RequireAuth from './Components/RequireAuth';
// import Input from './Common/Input/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Input /> */}
        <Route element={<PreventRoutes />}>
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
        </Route>
        <Route path="/more" element={<ViewPost />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset_password/:token" element={<ResetPassword />} />
        <Route path="/verify-code/:email" element={<Verification />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
