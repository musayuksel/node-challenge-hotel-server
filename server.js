const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

//Use this array as your (in-memory) data store.
const bookings = require("./bookings.json");

app.get("/", function (request, response) {
  response.send(
    "Hotel booking server.  Ask for /bookings, etc."
  );
});

//return all bookings
app.get("/bookings", (request, response) => {
  response.send(bookings);
});

const listener = app.listen(PORT, function () {
  console.log(
    "Your app is listening on port " +
      listener.address().port
  );
});
