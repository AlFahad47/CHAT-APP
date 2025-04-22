import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersForSidebars } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/users",protectRoute,getUsersForSidebars);

export default router;