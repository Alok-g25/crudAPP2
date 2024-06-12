const express=require("express")
const cors=require("cors")
const app=express()
const Router=require("./router/Router")
require("./dbConnect")

app.use(express.json())
app.use(cors())
app.use(Router)

app.listen(8000,()=>{
      console.log("server is Running on port http://localhost:8000")
})