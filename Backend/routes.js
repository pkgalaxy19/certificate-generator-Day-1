import './model.js';
import users from "./model.js";
import express , {Router} from 'express';
import { update_certificate } from './logics.js';
const router = express.Router();

router.post('/users', users);
router.post('/update_certificate',update_certificate);
// router.post('/send_mail',send_mail);

export default router;