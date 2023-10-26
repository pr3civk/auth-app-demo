import "./styles/App.css";
import Navbar from "./components/navbar";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import Content from "./components/content";
import ContentLogin from "./components/content-login";
import ContentLogout from "./components/content-logout";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useState, useEffect } from "react";






function App() {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

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
          console.log("Login successed")
          // console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  // console.log(user);
  // console.log(isLogged);

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route
            path="/"
            element={user ? <ContentLogin /> : <ContentLogout />}
          />

          <Route element={<ProtectedRoutes isLogged={isLogged} />}>
            <Route path="/content" element={<Content />} />
            <Route path="/profile" element={<Profile user={user} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
