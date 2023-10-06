const express = require('express');
app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const verifyRoute = require("./routes/verify");




dotenv.config()

mongoose
mongoose
  .connect(process.env.MONGO_URL )
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.error(err);
  });

  app.use(express.json());
  app.use("/api/verify", verifyRoute);
  app.use("/api/user", userRoute);
  
  
  


app.listen(process.env.PORT || 5000, () =>{
    console.log("connected succesfully")
})