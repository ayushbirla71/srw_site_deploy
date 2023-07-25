const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({ 
    userId:{type: String, ref:""},
    productId:{type: String, ref:""},
    Rating_no :{type :Number},
    comment :{type: String},
    Imges:{type :String}

  },{timestamps:true})

  module.exports = mongoose.model("Review",reviewSchema)