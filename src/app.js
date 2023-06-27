const express = require("express");
const { userRouter, bookRouter }= require("./routes")
const { initializeDB } = require("../src/config/db-config");
const { validateAuthMDW } = require("./middleware/authMiddleware");

const PORT=9009
const app = express();

app.use(express.json());


// Esta ruta solo será accesible por usuarios con el rol de "admin"

// app.get('/user/admin', validateAuthMDW, (req, res) => {
//   res.send('<h1>Hello, admin!</h1>');
// });


app.get('/user', (req, res)=>{
  console.log('User', req.user);

  res.send('<h1>Hello Word</h1>');

})

app.use('/user',userRouter )
app.use('/book', bookRouter)

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in ${PORT}`);
});

