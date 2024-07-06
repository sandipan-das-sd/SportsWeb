const mongoose=require('mongoose');
const ConnectDB=async()=>{
try {
    const dbURL="mongodb+srv://sandipanpyqplatform:ZyEDl4TUAuW9l9CR@tournamnet.p5f9ius.mongodb.net/Tournament?retryWrites=true&w=majority&appName=tournamnet"
    //if no DB url is not present in the env 
    if(!dbURL)
        {
            throw new Error ("Mongo Db connection is not defiend in env ")
        }
        else
        {
            await mongoose.connect(dbURL,{

            })
            console.log("Connected to MongoDB")
        }
    
} catch (error) {
    console.log("Error Connecting to the MongoDB",error.message)
}
}
module.exports=ConnectDB