import { Router } from 'express';
import { getData } from '../controllers/home';
const homeRouter = Router();

// ??
const isLoggedIn = (req, res) => {
    return req.session.user.id != null
}

homeRouter.get('/home', isLoggedIn, getData)

export default homeRouter;