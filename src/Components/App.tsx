import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./DashBoard";
import SignUpRedirect from "./SignUpRedirect";
import { UserAuth } from "./Context";

const App = () => {
  return (
    <Router>
      <UserAuth>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-up-redirect" element={<SignUpRedirect />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </UserAuth>
    </Router>
  );
};

export default App;
