import React from "react";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "./Context";
import { auth } from "../firebase";
import { UserAuth } from "./Context";

const DashBoard = () => {
  const navigate = useNavigate();
  const { currUser } = UseUserContext();
  const { signOutUser } = UseUserContext();
  const signOutOnClick = () => {
    signOutUser(auth);
    navigate("/");
  };

  return (
    <div>
      dashboard <button onClick={signOutOnClick}>sign out</button>
    </div>
  );
};

export default DashBoard;
