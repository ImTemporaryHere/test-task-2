const {Schema, model, Types} = require('mongoose')

const commentSchema = new Schema({
    "productId": Types.ObjectId,
    "description": String,
    "date": String,

})

const Comment = model('Comment', commentSchema,'comments')

module.exports = {Comment,commentSchema}
