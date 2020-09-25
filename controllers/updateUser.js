var mongoClient = require("mongodb").MongoClient;

var bcrypt = require("bcryptjs");

// var mongodbUrl =
//   "mongodb+srv://project:jgFUnvEZaWvmUrC3@cluster0.v7uiv.mongodb.net/project?retryWrites=true&w=majority";

const mongodbUrl =
  "mongodb+srv://project:harshit@cluster0.v7uiv.mongodb.net/project?retryWrites=true&w=majority";

function updateCart(req, res) {
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
            // var salt = bcrypt.genSaltSync(10);
            // userToBeChecked.password = bcrypt.hashSync(
            //   userToBeChecked.password,
            //   salt
            // );
            console.log(userToBeChecked);

            coll.updateOne(
              {
                email: userToBeChecked.email,
                password: userToBeChecked.password,
              },
              { $set: { active: userToBeChecked.active } },
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log(result);
                  res.json(result);
                }
              }
            );
          }
        });
      }
    }
  );
}

module.exports = updateCart;
