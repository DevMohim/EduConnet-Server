import { Router } from "express";
import upload from "../../config/multer.js";
import { uploadImage } from "../../config/cloudinary.js";

const router = Router()

router.post('/image', upload.single("image") , async(req,res)=>{
   try {
      const result = await uploadImage(req.file.buffer)

      res.status(200).send({
         success: true,
         message: "Image uploaded successfully",
         imageUrl: result.secure_url,
      })
   } catch (error) {
      res.status(500).send({
         success: false,
         message: error.message
      })
   }
})

export default router