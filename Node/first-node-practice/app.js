const express = require('express') //importing the express package
const app = express() //calling and saving the package in a const
const port = 3000

// app.use(cors())
app.use(express.json()); 
//tells it the request contains json
 
// app.get('/', function (req, res) {
//     //req- request coming in
//     //res- response you're sending back
//     console.log(req.body);
//   res.send('<h1>Hello Success</h1>') //this is a callback
// })

// const arr = [
//     {
//         city: "ib",
//         population: 6000
//     },
//     {
//         city: "lagos",
//         population: 5000
//     }
// ]

// //with params
// app.get('/country/:city', function (req, res) {
//     const city = req.params.city;
//     const data = arr.filter(el => el.city === city);
//     // console.log(req.params);
//     res.status(200).json({ data });
//     // res.send(data)
// })

// //with query
// app.get('/country', function (req, res) {
//     const city = req.query;
//     const data = arr.filter(el => el.city === city);
//     res.status(200).json({ data });
//     // res.send(data)
// })


// app.post('/post', function (req, res) {
//     console.log("Success", req.body);
//     res.status(201).json( req.body);
// })


const todos = [
    {
        id: 1,
        title: 'wake up',
        isComplete: false
    },
    {
        id: 2,
        title: 'eat',
        isComplete: false
    }
]

// app.get("/todo", (req, res) => {
//     res.status(200).json(todos);
// })

app.post("/todo",  (req, res) => {
    const {id, title, isComplete} = req.body;
    console.log(req.body);
    if (!id || !title) {
        return res
        .status(400)
        .json({ status: "fail", message: "Incomplete details"})
    }
    if (todos.find(el => el.id === id)) {
        return res
        .status(409)
        .json({ status: "fail", message: "Todo exists already"})
    }
    todos.push(req.body)
    res.status(201).json({ status: "success", message: "Todo created"});
})


// defining the middleware 
app.use("/todo/:todoId", (req, res, next) => {
    const { todoId } = req.params;
    const singleTodo = todos.find((el) => `${el.id}` === todoId);
    if (singleTodo) {
        req.data = singleTodo;
        return next()
    }
    res
    .status(404)
    .json({ status: "fail", message: `Todo with id ${todoId} not found`})
})

app.get("/todo/:todoId", (req, res) => {
    return res.status(200).json({ status: "success", message: `Todo with id ${todoId} fetched successfully`, data: req.data})
    //WITHOUT MIDDLEWARE
    // const { todoId } = req.params;
    // const singleTodo = todos.find((el) => `${el.id}` === todoId);
    // if (singleTodo) {
    //     return res
    //     .status(201)
    //     .json({ 
    //         status: "success",
    //         message: "Todo fetched successfully",
    //         data: singleTodo})
    // }
    // res.status(404).json({ status: "fail", message: `Todo with id ${todoId} not found`})
});


// without middleware
// app.patch("/todo/:todoId", (req, res) => {
//     const { todoId } = req.params;
//     const singleTodo = todos.find((el) => `${el.id}` === todoId)
//     if (singleTodo) {
//         singleTodo.isComplete = !singleTodo.isComplete
//         return res
//         .status(200)
//         .json({ status: "success", message: "Todo status has been updated", data: singleTodo })
//     }
//     res.status(404).json({ status: "fail", message: `Todo with id ${todoId} not found`})
// })


//with middlewares
app.patch("/todo/:todoId", (req, res) => {
  const newData = { ...req.data, isComplete: !req.data.isComplete}
  const index = todos.findIndex((el) => el.id === Number(newData.id))
  todos[index] = newData;
  res.status(200).json({
    status: 'success',
    message: `Todo with id ${newData.id} updated`,
    data: newData
  })
})

//with middlewares
app.put("/todo/:todoId", (req, res) => {
    const newData = { ...req.data, title: req.body.title}
    const index = todos.findIndex((el) => el.id === Number(newData.id))
    todos[index] = newData
    res.status(200).json({ status: "success", message: `Todo with id ${newData.id} has been updated`, data: newData})
})

// app.listen just tells the app what to do when a request is sent to port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


