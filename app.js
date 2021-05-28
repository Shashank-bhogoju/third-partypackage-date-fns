const addDays = require("date-fns/addDays");

const express = require("express");
const app = express();

module.exports = app.get("/", (request, response) => {
  const result = addDays(Date.now(), 100);
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

app.listen(3000);
