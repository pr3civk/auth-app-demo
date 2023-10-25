const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportFile = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");

const app = express();

const CLIENT_URL = "http://localhost:5173";

app.use(
  cookieSession({ name: "session", keys: ["test"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running on 5000");
});
