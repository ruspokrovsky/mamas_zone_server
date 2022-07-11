const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const DB = "mongodb+srv://ruspokrovsky:nefaz1975@cluster0.nwuz1.mongodb.net/?retryWrites=true&w=majority"

const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);



mongoose.connect(DB).then(() => {
    console.log("Connection Successful");
  }
  )
  .catch((e) => {
    console.log(e);
  });



app.listen(PORT, () => {
console.log("server running port:", PORT);
})