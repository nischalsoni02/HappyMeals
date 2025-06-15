import mongoose from "mongoose";

export const  connectDB = async () =>{

    //await mongoose.connect('mongodb+srv://nischal:Nischal%402002@cluster0.abnfh.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    await mongoose.connect('mongodb+srv://nischal:Nischal_2002@menu.qui0cgh.mongodb.net//food-del').then(()=>console.log("DB Connected"));
   //mongodb+srv://nischal:Nischal_2002@menu.qui0cgh.mongodb.net/
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
