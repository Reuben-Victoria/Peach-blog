import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Authentication/SignUp/Signup';
import Login from './Authentication/LogIn/Login';
import ResetPassword from './Authentication/ResetPassword/ResetPassword';
import Header from './Components/Header/Header';
import Successful from './Authentication/Successful/Successful';
import CreatePost from './Container/CreatePost/CreatePost';
import Footer from './Components/Footer/Footer';
import IconsMenuBar from './Components/IconsMenuBar/IconsMenuBar';
import RecentActivity from './Components/RecentActivity/RecentActivity';
import NavBar from './Components/NavBar/NavBar';
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
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/pop-up" element={<IconsMenuBar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/activity" element={<RecentActivity />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
