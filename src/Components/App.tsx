import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import DashBoard from "./DashBoard";
import base from "./base.scss";
import { UserAuthProvider } from "./Context";

const App = () => {
  return (
    <Router>
      <UserAuthProvider>
        <Routes>
          //figure out how to use exact path for /
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </UserAuthProvider>
    </Router>
  );
};

export default App;
