const {Schema, model, Types} = require('mongoose')
const {commentSchema} = require('./Comment')

const schema = new Schema({
  "imageUrl": String,
  "name": String,
  "count": Number,
  "size": {
    "width": Number,
    "height": Number
  },
  "weight": String,
  "comments": [commentSchema]

})

const Product = model('Product', schema,'products')
module.exports = {Product}
