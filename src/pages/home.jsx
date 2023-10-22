import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import "../styles/App.css";
import ContentLogin from "../components/content-login";
import ContentLogout from "../components/content-logout";

const Home = (isLogged, setIsLogged) => {
  // const [user, setUser] = useState({});

  const GOOGLE_CLIENT_ID =
    "638912114324-b2ga67pimtebcb75s4kjnb3kj455lpt3.apps.googleusercontent.com";

  // const handleGoogleLogin = (response) => {
  //   console.log(response);
  //   var userObject = jwt_decode(response.credential);
  //   console.log(userObject);
  //   setUser(userObject);
  //   setIsLogged(true);
  // };

  // const handleSignOut = () => {
  //   setUser({});
  //   setIsLogged(false);
  // };

  return (
    <div className="home">
      {}
    </div>
  );
};

export default Home;
