const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 5001;
const app = express();
const data = require("./data");
const { checkIfAuthenticated } = require("./token");
const token = "ahuBHejkJJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  console.log(authorization)
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.get('/health', (req, res) => {
  res.send('it worked');
})

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  req.loggedIn = true;
  res.status(200).json({
    username: "BloomTech",
    role: "editor",
    token: token
  });
});

app.post("/api/logout", (req, res) => {
  //remove token from database
  res.status(200).json({
    payload: token
  });
});

app.get("/api/data", checkIfAuthenticated, (req, res) => {
  setTimeout(() => {
    res.send(data);
  }, 1000);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
