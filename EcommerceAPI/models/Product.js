
const mongoose = require('mongoose');


const   ProductSchema = new mongoose.Schema(

    {
        title: {
            type: String,
            required: true,
            unique: true,
          },
          desc: {
            type: String,
            required: true,
            
          },
          img: {
            type: String,
            required: true,
          },
          brand: String,
          categories: {
            type: array,
          },
          price: {
            type: Number,
            required: true,
          },
          color: {
            type: string,
            
          },
          
          
    },
    {timestamps: true}
);
module.exports = mongoose.model("Product", ProductSchema);