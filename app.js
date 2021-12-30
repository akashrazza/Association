const express = require("express");
const CredentialModel = require("./models").Credentials;
const UserModel = require("./models").UserDetails;
const PostModel = require("./models").Posts;
const BookModel = require("./models").books;
const BookJunctionModel = require("./models").userbook;
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


app.get("/books", (req, res) => {
    BookModel.findAll({include: [{
        model: UserModel,
        // Pass in the Product attributes that you want to retrieve
        // attributes: ['id', 'name'],
        through: {
          // This block of code allows you to retrieve the properties of the join table
          model: BookJunctionModel
        }
      }]})
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