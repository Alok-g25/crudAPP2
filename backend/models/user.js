const mongoose =require("mongoose")

const userSchema=new mongoose.Schema({
      username:{
            type:String,
            required:[true,"username must be required"]
      },
      email:{
            type:String,
            unique:true,
            required:[true,"email must be required"]
      },
      phone:{
            type:String,
            required:[true,"phone must be required"]
      },
      state:{
            type:String,
            required:[true,"state must be required"]
      },
      dsg:{
            type:String,
            required:[true,"dsg must be required"]
      },
      message:{
            type:String,
            required:[true,"message must be required"]
      },
      
})

const user=new mongoose.model("users",userSchema)

module.exports=user