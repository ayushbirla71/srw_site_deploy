const express = require('express')
const router = express.Router()
const link = require('../controllers/aws')
const { createUser,userLogin,UpdateUser, getUserProfile, userForgetPassword } = require('../controllers/userController')
const {createProduct, getProductByQuery, getProductById, deleteProductById, updateProduct, getProductByFilter}=require('../controllers/productController')
const {createCart, updateCart, deleteCart, getCart}=require('../controllers/cartControllet')
const { createOrder,updateOrder,updateNewOrder ,getOrder} = require('../controllers/orderController')
const { authenticationMid, authorizationMid } = require('../middleware/auth')
const {EmailVerification}= require('../controllers/EmailVerification')


router.get("/test-me",function(req,res){
    res.send("This is the test Api!!!!!!!!!!!!!!")
})

//-------------------- user ------------------//
router.post('/register', createUser)
router.post('/emailVerification', EmailVerification)
router.post('/login',userLogin)
router.patch('/forgetPassword', userForgetPassword)
router.get('/user/:userId/profile',authenticationMid, getUserProfile)
router.put('/user/:userId/profile',authenticationMid,authorizationMid,UpdateUser)

//------------------- Product ----------------//
router.post('/products',createProduct)
router.get('/products',getProductByQuery)
router.get('/products/filter',getProductByFilter)
router.get('/products/:productId',getProductById)
router.put('/products/:productId',updateProduct)
router.delete('/products/:productId',deleteProductById)

//-------------------- Cart ------------------//
router.post('/users/:userId/cart',authenticationMid,authorizationMid,createCart)
router.put('/users/:userId/cart',authenticationMid,authorizationMid,updateCart)
router.get('/users/:userId/cart',authenticationMid,authorizationMid,getCart)
router.delete('/users/:userId/cart',authenticationMid,authorizationMid,deleteCart)

//------------------------Order -----------------//
router.post('/users/:userId/orders',authenticationMid,authorizationMid,createOrder)
router.get('/users/:userId/getOrders',authenticationMid,authorizationMid,getOrder)
router.put('/users/:userId/orders',authenticationMid,authorizationMid,updateOrder)
router.put('/users/:userId/ordersList',authenticationMid,authorizationMid,updateNewOrder)

//------------------------ error ----------------//
router.all('/*',(req,res)=>{return res.status(400).send({status:false, message:"pls provide valid path"})})


module.exports = router