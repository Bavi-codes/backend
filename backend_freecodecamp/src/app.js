import express from "express"

const app = express(); //create an express app

app.use(express.json()); //gives the server the ability to pass the json request it gets from the client side

//routes import
import userRouter from './routes/User_routes.js'

//routes declaration
app.use("/api/v1/users",userRouter);

//example route: http://localhost:4000/api/v1/users/register

export default app;
