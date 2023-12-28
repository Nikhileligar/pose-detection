import express from 'express';
import * as controller from '../controllers/controller.js';

const router = express.Router();

router.route('/signup').post(controller.signup);
router.route('/login').post(controller.login);
router.route('/signout').post(controller.SignOut);
export default router;