
import './App.css';
import LandingPage from './pages/landingPage/landingPage';
import SignIn from './components/Forms/SignIn/signIn';
import SignUp from './components/Forms/SignUp/signUp';
import Usertype from './components/Forms/Usertype/usertype';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import UserLanding from './pages/User/UserLanding';
import SubscriptionPlanPage from './pages/subscriptionPlanPage/subscriptionPlanPage';

const App = () => {

  return (

    <div>
      <BrowserRouter>
        <Routes >
          {/* <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/usertype" element={<Usertype />} />
          <Route path="/userLanding" element={<UserLanding/>}/>
          <Route path="/" element={<LandingPage/>} /> */}
          <Route path='/' exact element={<SubscriptionPlanPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



