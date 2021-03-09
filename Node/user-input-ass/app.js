const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const userDetails = [
//   {
//   firstName: "Success",
//   lastName: "Ologunsua",
//   password: "success",
//   email: "successologunsua@gmail.com"  
// }
]

app.get("/userdetails", (req, res) => {
    res.status(200).json(userDetails);
})

app.post("/signup",  (req, res) => {
  const { firstName, lastName, password, email } = req.body;
  console.log(req.body);
  if (firstName==='' || lastName==='' || password==='' || email==='') {
      return res
      .status(400)
      .json({ status: "fail", message: "Incomplete details"})
  }
  if (password===req.body.password || email===req.body.email) {
    // if (userDetails.find((el) => el.email === email || el.password == password)) {
      return res
      .status(401)
      .json({ status: "fail", message: "User with this password or email exists"})
  }
  userDetails.push(req.body)
  res.
  status(201)
  .json({ status: "success", message: "Account created successfully"});
})

app.get("/signin", function (req, res) {
  const {password, email} = req.body;
  const user = userDetails.find((el) => el.email === email);
  if (userDetails.find((el) => el.email === email && el.password === password)) {
    return res
    .status(200)
    .json({ status: "success", message: "Login successful", data: user});
  }
    res
    .status(404)
    .json({ status: "fail", message: "Account not found, pls sign up" })
});


app.patch("/userDetails/:id", function (req, res) {
  const { id } = req.params;
  const user = userDetails.find((el) => el.email === id);
  if (user) {
    if (user.email !== req.body.email){
      res.status(400).json({ status: "fail", message: "email not updated"})
    }
      user.firstName = req.body.firstName
      user.lastName = req.body.lastName
      user.password = req.body.password      
      return res.status(200).json({
          status: "success",
          message: "Email updated",
          data: user
      });
  }
  res.status(400).json({ status: "fail", message: "Email not updated "})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

