import { Router } from 'express';
import User from '../controllers/users.js';

const router = Router();

router.get('/',(req,res)=>{
    res.status(200).json({ message:"Hello" });
});

router.post('/sendcode',User.sendCode);

router.post('/verifycode',User.verifyCode);

// exporting defualt router
export default router;