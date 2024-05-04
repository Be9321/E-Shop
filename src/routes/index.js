import express from "express";
import homeRouter from "./homeRoutes.js";
import paymentRouter from "./paymentRoutes.js";
import recommendationRouter from "./recommendationRoutes.js";
import userRouter from "./userRoutes.js";
import productRouter from "./productRoutes.js";
import analyricsRouter from "./analyticsRoutes.js";
import cartRouter from "./cartRoutes.js";
import categoryRouter from "./categoryRoutes.js";
import authRouter from "./authRoutes.js";
import chatRouter from "./chatRoutes.js";
import notificarionRouter from "./notificationRoutes.js";
import orderRouter from "./orderRoutes.js";
import shoppingRouter from "./shoppingRoutes.js";

const route= express.Router();

route.use('/home', homeRouter)
route.use('/payment', paymentRouter)
route.use ('/recommendation',recommendationRouter)
route.use('/user', userRouter)
route.use('/product', productRouter)
route.use('/analytics', analyricsRouter)
route.use('/cart', cartRouter)
route.use('/category', categoryRouter)
route.use('/auth', authRouter)
route.use('/chat', chatRouter)
route.use('/notification', notificarionRouter)
route.use('/order', orderRouter)
route.use('/shop', shoppingRouter)


export default route;

