const express = require("express");
const CredentialModel = require("./models").Credentials;
const UserModel = require("./models").UserDetails;
const PostModel = require("./models").Posts;

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: 1,
    message: "Welcome to homepage",
  });
});

app.get("/users", (req, res) => {
  UserModel.findAll({include: [{all:true}]})
    .then((data) => {
      res.status(200).json({
        status: 1,
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 0,
        msg: "there is something error",
        err: err,
      });
    });
});

app.get("/usercredential", (req, res) => {
  CredentialModel.findAll({include: [{all:true}]})
    .then((data) => {
      console.log(data);
      res.status(200).json({
          status:1,
          data:data
      })
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/post", (req, res) => {
    PostModel.findAll({include: [{all:true}]})
      .then((data) => {
        console.log(data);
        res.status(200).json({
            status:1,
            data:data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  });

app.listen(PORT, () => {
  console.log("Sever running at 3000");
});