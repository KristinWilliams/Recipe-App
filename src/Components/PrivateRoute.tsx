import { Component, useState } from "react";
import {
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
  RouteProps,
} from "react-router-dom";
import { UseUserContext } from "./Context";

// const { currUser } = UseUserContext();
// interface Props extends RouteProps {
//   currUser: boolean;
// }
// const [test, setTest] = useState(false);

const PrivateRoute = ({ ...routeProps }) => {
  const { currUser } = UseUserContext();
  //   if (currUser) {
  //     return <Route {...routeProps} />;
  //   }
  return currUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
