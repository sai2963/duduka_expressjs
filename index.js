const path = require("path");
const fs = require("fs");

const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.get("/currenttime", function hi(req, res) {
  res.send("<h1>" + new Date() + "</h1>");
});
app.get("/", function hi1(req, res) {
  res.send(
    '<h1> <form action="/store-user" method="POST"> <label>Your Name</label><input type="text" name="username" > <button type="submit">Submit</button></form></h1>'
  );
});
app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  console.log(userName);
  const filepath = path.join(__dirname, "data", "users.json");
  const filedata = fs.readFileSync(filepath);
  const existingUsers = JSON.parse(filedata);
  existingUsers.push(userName);
  fs.writeFileSync(filepath, JSON.stringify(existingUsers));
  res.send("<h1>Username Stored</h1>");
});

app.get("/users", function (req, res) {
  const filepath = path.join(__dirname, "data", "users.json");
  const filedata = fs.readFileSync(filepath);
  const existingUsers = JSON.parse(filedata);
  let responsedata="<ul>";
  for (user of existingUsers){
    responsedata+='<li>'+ user+'</li>'
  }
  responsedata+='</ul>'
  res.send(responsedata);
});
app.listen(2000, () => {
  console.log("server running");
  } );
