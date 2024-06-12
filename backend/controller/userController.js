const user = require("../models/user");


async function createUser(req, res) {
      try {
          const data = new user(req.body)
          await data.save()
          res.send({  result: "Done", data: data })
      }
      catch (error) {
            if(error.keyValue && error.keyValue.email){
                  res.status(400).send({result: "failed", message: "email id is allready exist" })
                  return
            }
          else if (error.errors.username) {
              res.status(400).send({result: "failed", message: error.errors.username.message })
              return
          }
          else if (error.errors.email) {
              res.status(400).send({result: "failed", message: error.errors.email.message })
              return
          }
          else if (error.errors.phone) {
              res.status(400).send({result: "failed", message: error.errors.phone.message })
              return
          }
          else if (error.errors.state) {
              res.status(400).send({result: "failed", message: error.errors.state.message })
              return
          }
          else if (error.errors.dsg) {
              res.status(400).send({result: "failed", message: error.errors.dsg.message })
              return
          }
          else if (error.errors.message){
              res.status(400).send({result: "failed", message: error.errors.message.message })
              return
          }
          else {
              res.status(500).send({result: "failed", message: "Internal server Error" })
              return
          }
  
      }
  }


  async function getUser(req, res) {
      try {
        const data = await user.find({}).sort({ _id: -1 });
        res.send({ result: "Done", count: data.length, data: data });
      } catch (error) {
          res.status(500).send({result:"failed",message:"Internal server error"})
          return
      }
}
  async function getSingleUser(req, res) {
      try {
            // console.log(req.params.id)
        const data = await user.findOne({_id:req.params.id});
        if(data)
            res.send({ result: "Done", data:data});
        else{
            res.status(404).send({result:"failed",message:"data not Found"})
            return
      }    
      } catch (error) {
          res.status(500).send({result:"failed",message:"Internal server error"})
          return
      }
}

async function updateUser(req,res){
      console.log(req.params.id)
      try {
            const data=await user.findOne({_id:req.params.id})
            if(data){
                //   console.log(req.params.id)
                //   console.log(data)
                  data.username= req.body.username ??  data.username
                  data.email= req.body.email ??  data.email
                  data.phone= req.body.phone ??  data.phone
                  data.state= req.body.state ??  data.state
                  data.dsg= req.body.dsg ??  data.dsg
                  data.message= req.body.message ??  data.message
                  await data.save() 
                //   console.log(data)
                  res.send({result:"Done",message:"data update successfully",data:data})
            }
            else{
                  res.status(404).send({result:"failed",message:"data not Found"})
                  return
            }
      } catch (error) {
            if(error.keyValue && error.keyValue.email){
                  res.status(400).send({result: "failed", message: "email id is allready exist" })
                  return
            }
          else if (error.errors.username) {
              res.status(400).send({result: "failed", message: error.errors.username.message })
              return
          }
          else if (error.errors.email) {
              res.status(400).send({result: "failed", message: error.errors.email.message })
              return
          }
          else if (error.errors.phone) {
              res.status(400).send({result: "failed", message: error.errors.phone.message })
              return
          }
          else if (error.errors.state) {
              res.status(400).send({result: "failed", message: error.errors.state.message })
              return
          }
          else if (error.errors.dsg) {
              res.status(400).send({result: "failed", message: error.errors.dsg.message })
              return
          }
          else if (error.errors.message){
              res.status(400).send({result: "failed", message: error.errors.message.message })
              return
          }
          else {
              res.status(500).send({result: "failed", message: "Internal server Error" })
              return
          }   
      }
}

async function deleteUser(req,res){
    try {
        let data =await user.findOne({_id:req.params.id})
        if(data){
            await data.deleteOne()
            res.send({result:"Done",message:"data delete successfully"})
            }
        else{
            res.status(404).send({result:"failed",message:"data not Found"})
            return
        }
    } catch (error) {
        res.status(500).send({result: "failed", message: "Internal server Error" })
        return
    }
}

  module.exports = { getUser,createUser,getSingleUser,updateUser,deleteUser};
