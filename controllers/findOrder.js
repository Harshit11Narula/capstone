var mongoClient = require("mongodb").MongoClient;

// var mongodbUrl =
//   "mongodb+srv://project:utZN7W7OTIwd9va6@cluster0.v7uiv.mongodb.net/project?retryWrites=true&w=majority";



const mongodbUrl =
  "mongodb+srv://project:harshit@cluster0.v7uiv.mongodb.net/project?retryWrites=true&w=majority";

function cart(req, res) {
  mongoClient.connect(
    mongodbUrl,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, dbHost) => {
      if (err) {
        res.status(500);
        res.json({ message: "Not able to connect to the server" });
      } else {
        var db = dbHost.db("project");
        db.collection("order", (err, coll) => {
          if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to the server" });
          } else {
            coll.find({}).toArray((err, data) => {
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

module.exports = cart;
