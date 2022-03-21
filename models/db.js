const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://APIREST:APIREST@api.j6bos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Connected to Database");
    else console.log("Not Connected to Database");
  }
);

require("./books");
