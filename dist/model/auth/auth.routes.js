import express from 'express';
import { authLoginController } from './auth.controller.js';
const router = express.Router();
router.post('/login', authLoginController);
export const authRouter = router;
//# sourceMappingURL=auth.routes.js.map