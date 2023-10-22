import "./styles/App.css";
import Navbar from "./components/Navbar";
import LoginContent from "./pages/logincontent";
import Profile from "./pages/profile";

import ContentLogin from "./components/content-login";
import ContentLogout from "./components/content-logout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect, useRef } from "react";

function App() {
  // const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const navigateRef = useRef(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          setIsLogged(true);
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log(user);

  return (
    <div className="App">
      <Router ref={navigateRef}>
        <Navbar user={user} />
        <Routes>
          <Route
            path="/"
            element={user ? <ContentLogin /> : <ContentLogout />}
          />
          <Route
            path="/content"
            element={!user ? <ContentLogout /> : <LoginContent />}
          />

          <Route
            path="/profile"
            element={!user ? <ContentLogout /> : <Profile user={user} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
