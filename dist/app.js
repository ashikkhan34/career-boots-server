import express from 'express';
import cors from 'cors';
import globalErrorHandler from './model/middleware/globalErrorHandler.js';
import { userRouter } from './model/user/user.routes.js';
import { authRouter } from './model/auth/auth.routes.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(globalErrorHandler);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.get('/', (req, res) => {
    res.send('your career is run on the way...');
});
export default app;
//# sourceMappingURL=app.js.map