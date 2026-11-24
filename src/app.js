import express from 'express'
import cors from 'cors'


const app = express()


app.use(cors())
app.use(express.json())


//all route write here like app.use('/apiname', imported route)

app.get('/' ,  (req,res)=> {
   res.status(200).send({status: "true" , message: 'Api is working'})
})

export default app