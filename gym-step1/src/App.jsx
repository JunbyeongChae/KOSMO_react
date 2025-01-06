import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SignupPage from "./components/auth/SignupPage";
import LoginView from "./components/auth/LoginView";
const App = () => {
  return (
    <>
    <div className="container">
      <Routes>
        <Route path="/" exact={true} element={<HomePage/>}/>
        <Route path="/login" exact={true} element={<LoginView/>}/>
        {/*1.일반회원일때  /login/signup?type=member, 2.코치일때 /login/signup?type=teacher*/}
        <Route path="/login/signup" element={<SignupPage/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;