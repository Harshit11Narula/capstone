var mongoClient = require("mongodb").MongoClient;

var bcrypt = require("bcryptjs");

const mongodbUrl =
  "mongodb+srv://project:harshit@cluster0.v7uiv.mongodb.net/project?retryWrites=true&w=majority";


// var mongodbUrl =
//   "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";



function checkUser(req, res) {
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
            var salt = bcrypt.genSaltSync(10);
            // userToBeChecked.password = bcrypt.hashSync(
            //   userToBeChecked.password,
            //   salt
            // );
            coll
              .find({
                active: "true",
              })
              .toArray((err, data) => {
                if (err) {
                  res.status(500);
                  res.json({
                    message: "Not able to connect to the server",
                  });
                } else {
                  res.json(data);
                }
              });
          }
        });
      }
    }
  );
}

module.exports = checkUser;
