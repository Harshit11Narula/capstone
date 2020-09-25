const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;
const app = express();

const productsRoute = require("./routes/productsRoute");
const pageRoute = require("./routes/pageRoute");
const cart = require("./routes/cartRoute");
const findCart = require("./routes/findCartRoute");
const updateCart = require("./routes/updateCart");
const insertCart = require("./routes/insertCart");
const dropRoute = require("./routes/dropRoute");
const deleteOne = require("./routes/deleteOne");
const orderRoute = require("./routes/findOrderRoute");
const searchRoute = require("./routes/searchRoute");
const updateUser = require("./routes/updateUserRouter");
const insertUser = require("./routes/insertUserRoute");
const activeUser = require("./routes/activeRoute");
const checkUser = require("./routes/checkUserRoute");
const insertOrder = require("./routes/insertOrder");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, "public", "dist", "eShopping")));

app.use("/api/products", productsRoute);

app.use("/api/page", pageRoute);

app.use("/api/cart", cart);

app.use("/api/findCart", findCart);

app.use("/api/updateCart", updateCart);

app.use("/api/insertCart", insertCart);

app.use("/api/insertUser", insertUser);

app.use("/api/activeUser", activeUser);

app.use("/api/checkUser", checkUser);

app.use("/api/updateUser", updateUser);

app.use("/api/searchCart", searchRoute);

app.use("/api/findOrder", orderRoute);

app.use("/api/insertRoute", insertOrder);

app.use("/api/deleteCart", deleteOne);

app.use("/api/removeCart", dropRoute);


app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running at port: ${PORT}`);
  }
});

// const mongoClient = require("mongodb").MongoClient;
// const uri =
// "mongodb+srv://capstone_e_shopping:kL7gP74c4uQwNna@cluster0.qkwqp.mongodb.net/capstone_e_shopping?retryWrites=true&w=majority";

// mongoClient.connect(
//   uri,
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   (err, dbHost) => {
//     if (err) {
//       console.log(`Error connection to server`);
//     } else {
//       db = dbHost.db("project");
//       db.collection("products", (err, coll) => {
//         if (err) {
//           console.log(`Error : ${err}`);
//           return null;
//         } else {
//           coll
//             .find({})
//             .then((data) => {
//               console.log(data);
//             })
//             .catch((err) => {
//               console.log(err);
//               return null;
//             });
//         }
//       });
//     }
//   }
// );
// app.listen(PORT, (err) => {
//   if (!err) {
//     console.log(`Connecting to the server...`);
//   }
// });
