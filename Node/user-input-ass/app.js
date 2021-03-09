const express = require('express')
const app = express()
const port = 3000

const userDetails = [
  {
  firstName: "Success",
  lastName: "Ologunsua",
  email: "successologunsua@gmail.com",
  password: "success"
}
]

app.get("/userdetails", (req, res) => {
    res.status(200).json(userDetails);
})

app.post("/signup",  (req, res) => {
  const {password, email} = req.body;
  console.log(req.body);
  if (!password || !email) {
      return res
      .status(400)
      .json({ status: "fail", message: "Incomplete details"})
  }
  if (userDetails.find(el => el.password === password || el.email === email)) {
      return res
      .status(409)
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
    .json({ status: "success", message: "You have logged in", data: user});
  }
    res
    .status(404)
    .json({ status: "fail", message: "Account not found, pls sign up" })
});


app.patch("/userDetails/:userId", function (req, res) {
  const { userId } = req.params;
  const user = userDetails.find((el) => el.email === userId);
  if (user) {
      user.firstName = req.body.firstName
      user.lastName = req.body.lastName
      user.password = req.body.password      
      return res.status(200).json({
          status: "success",
          message: "Email updated",
          data: user
      });
  }
  res.status(409).json({ status: "fail", message: "Email not updated "})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

