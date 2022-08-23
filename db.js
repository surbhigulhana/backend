const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Education:987654321@cluster0.h2yuep5.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("successfull");
  });
