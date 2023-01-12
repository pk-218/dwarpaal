import { Router } from 'express';

const router = Router();

router.get((req,res)=>{
    res.status(200).json({ message:"Hello" });
});

// exporting defualt router
export default router;