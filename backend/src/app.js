import express from "express"
import cors from "cors" 
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"17kb"}))
app.use(express.urlencoded({extended: true, limit: "17kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//import routes
import applicationRouter from "./routes/application.routes.js"
import userRouter from "./routes/user.routes.js"
import eventRouter from "./routes/event.routes.js"
import eventUserRoute from "./routes/event-user.routes.js"
import authRouter from "./routes/auth.routes.js"

//routes declaration 
app.use('/events', eventRouter)
app.use('/users', userRouter)
app.use('/auth', eventUserRoute)
app.use('/applications', applicationRouter)
app.use('/eventusers', authRouter)

//e.g.http://localhost:4000/api/v1/users/register

export {app}