const Router=require("express").Router()
const {getUser, createUser, getSingleUser, updateUser, deleteUser}=require("../controller/userController")

Router.post("/user",createUser)
Router.get("/user",getUser)
Router.get("/user/:id",getSingleUser)
Router.put("/user/:id",updateUser)
Router.delete("/user/:id",deleteUser)


module.exports=Router