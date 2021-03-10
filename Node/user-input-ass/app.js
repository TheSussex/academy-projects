const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const userDetails = [
  {
  firstName: "Success",
  lastName: "Ologunsua",
  password: "success",
  email: "successologunsua@gmail.com"  
},
{
  firstName: "Ayo",
  lastName: "Ologunsua",
  password: "ayo",
  email: "ayo@gmail.com"  
},
]

// get all users' details
app.get("/userdetails", (req, res) => {
    res.status(200).json(userDetails);
})

// get single user's details
app.get("/userdetails/:userEmail", (req, res) => {
  const { userEmail } = req.params;
  const currentUser = users.find(el => el.email === userEmail);
  return res.status(200).json({ 
    status: "success", 
    message: "User fetched successfully", 
    data: req.currentUser 
});
})


// sign up, validate with email(unique)
app.post("/signup",  (req, res) => {
  const { firstName, lastName, password, email } = req.body;
  console.log(req.body);
  if (!firstName || !lastName || !password || !email) {
      return res
      .status(400)
      .json({ status: "fail", message: "Incomplete details"})
  }
    if (userDetails.find((el) => el.email === email)) {
      return res
      .status(401)
      .json({ status: "fail", message: "User with this password or email exists"})
  }
  userDetails.push(req.body)
  res.
  status(201)
  .json({ status: "success", message: "Account created successfully"});
})


app.post("/signin", function (req, res) {
  const {email, password} = req.body;
  if (email || password) {
    return res
    .status(200)
    .json({ status: "success", message: "Login successful", data: user});
  }
    res
    .status(404)
    .json({ status: "fail", message: "Account not found, pls sign up" })
});

app.put("/users/:userEmail", (req, res) => {
  if (req.body.firstName) {
      req.currentUser.firstName = req.body.firstName 
  }
  if (req.body.lastName) {
      req.currentUser.lastName = req.body.lastName 
  }
  if (req.body.password) {
      req.currentUser.password = req.body.password 
  } 
  return res.status(200).json({ 
      status: "success", 
      message: "first name and last name has been updated", 
      data: req.currentUser  
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

