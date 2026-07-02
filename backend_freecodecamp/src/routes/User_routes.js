//Routes contes the path
//Router is a tool that helps us gets routes in express
//express is the framweork that handles the route, but router is the tools we use

import {Router} from 'express';
import { registerUser } from '../controllers/user_controller.js';
const router = Router();

router.route('/register').post(registerUser);

export default router;