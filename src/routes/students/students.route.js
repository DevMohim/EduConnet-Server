import { Router } from "express";
import { studentsCollection } from "../../config/collections.js";

const router = Router()


router.post('/' , async(req,res) => {
   const data = req.body
   const result = await studentsCollection.insertOne(data)
   res.status(200).send(result)
})

router.get('/' ,async (req,res)=>{
   const result = await studentsCollection.find().toArray()
   res.status(200).send(result)
})


export default router