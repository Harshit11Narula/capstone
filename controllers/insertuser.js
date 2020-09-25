var mongoClient = require("mongodb").MongoClient;
var bcrypt = require("bcryptjs");

// var mongodbUrl =
//   "mongodb+srv://project:utZN7W7OTIwd9va6@cluster0.v7uiv.mongodb.net/project?retryWrites=true&w=majority";


const mongodbUrl =
  "mongodb+srv://project:harshit@cluster0.v7uiv.mongodb.net/project?retryWrites=true&w=majority";

function insertUser(req, res) {
  mongoClient.connect(
    mongodbUrl,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, dbHost) => {
      if (err) {
        res.status(500);
        res.json({ message: "Not able to connect to the server" });
      } else {
        var db = dbHost.db("project");
        db.collection("user", (err, coll) => {
          if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to the server" });
          } else {
              var userToBeChecked = req.body;
              console.log(userToBeChecked);
              // var salt = bcrypt.genSaltSync(10);
              // userToBeChecked["password"] = bcrypt.hashSync(userToBeChecked["password"], salt);
              // console.log(userToBeChecked);
            coll.insertOne(userToBeChecked, (err, result) => {
              if (err) {
                res.status(500);
                res.json({ message: "Not able to connect to the server" });
              } else {
                res.json(userToBeChecked);
              }
            });
          }
        });
      }
    }
  );
}

module.exports = insertUser;
