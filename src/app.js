const express = require("express");
const { userRouter, bookRouter, libraryRouter } = require("./routes");
const { initializeDB } = require("../src/config/db-config");


const PORT = 9009;
const app = express();

app.use(express.json());

app.get('/user', (req, res) => {
  console.log('User', req.user);
  res.send('<h1>Hello World</h1>');
});

app.use('/user', userRouter);
app.use('/book', bookRouter);
app.use('/library', libraryRouter);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running on port ${PORT}`);
});
