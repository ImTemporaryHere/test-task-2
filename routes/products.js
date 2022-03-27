const {Router} = require('express');
// const config = require('config')
const {Product} = require('../models/Product');
const {Comment} = require('../models/Comment');
const router = Router()


// /api/auth/register
router.get(
  '/',
  async (req, res) => {
  try {

    const products = await Product.find({}).lean()

    res.status(200).json(products)

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


router.post(
    '/',
    async (req, res) => {
      try {

        const product = req.body;

        const newProduct = new Product(product);

        await newProduct.save()

        res.status(201).json({message: 'saved', id: newProduct._id})

      } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
      }
    })




router.delete(
    '/:productId',
    async (req, res) => {
      try {
        const productId = req.params.productId;

        await Product.findOneAndDelete({_id: productId})

        await Comment.deleteMany({productId})

        res.status(200).json({message: 'deleted'})

      } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
      }
    })














router.post(
    '/:productId/comments',
    async (req, res) => {
      try {

        const productId = req.params.productId;

        const comment = req.body;

        const newComment = new Comment(comment)

        await newComment.save()


        const product = await Product.findOne({_id: productId})

        product.comments.push(newComment)

        await product.save()

        res.status(201).json({message: 'saved'})

      } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
      }
    })



module.exports = router
