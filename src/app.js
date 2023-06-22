const express = require("express");
const { initializeDB } = require("../src/config/db-config");


const PORT=9009
const app = express();


app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in ${PORT}`);
});
