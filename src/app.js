import express from 'express'
import cors from 'cors'
import uploadRoutes from './routes/upload/upload.route.js'
import studentsRoute from './routes/students/students.route.js'


const app = express()


app.use(cors())
app.use(express.json())


//all route write here like app.use('/apiname', imported route)
app.use('/api/uploads' , uploadRoutes )
app.use("/api/students", studentsRoute);



app.get('/' ,  (req,res)=> {
   res.status(200).send({status: "true" , message: 'Api is working'})
})

export default app