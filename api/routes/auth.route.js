// api/routes/auth.route.js

import express from 'express';
import { signup, signin, signOut, google } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signOut);
router.post('/google', google); // Assuming you have a Google auth route

export default router;
