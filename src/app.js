const express = require("express");
const { userRouter }= require("./routes")
const { initializeDB } = require("../src/config/db-config");
const { authMiddleware } = require("./middleware/authMiddleware");


const PORT=9009
const app = express();

app.use(express.json());

app.use(authMiddleware)


app.get('/user', (req, res)=>{
  console.log('User', req.user);

  res.send('<h1>Hello Word</h1>');

})

app.use('/user',userRouter )

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in ${PORT}`);
});


