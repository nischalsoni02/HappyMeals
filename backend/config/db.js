import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://nischalsoni:Nischal_2002@cluster1.stvesa9.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   //check
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
