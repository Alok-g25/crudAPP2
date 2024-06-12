const mongoose=require("mongoose")

async function connectDb(){
      try {
            await mongoose.connect("mongodb://localhost:27017/31May24")
            console.log("database is connected")
      } catch (error) {
            console.log("databa is not connected",error)
      }
}

connectDb()