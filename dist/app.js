import express from 'express';
import cors from 'cors';
import globalErrorHandler from './model/middleware/globalErrorHandler.js';
import { userRouter } from './model/user/user.routes.js';
import { authRouter } from './model/auth/auth.routes.js';
import { notificationRouter } from './model/Notification/notification.routes.js';
import { mentorRouter } from './model/mentor/mentor.routes.js';
import { questionRouter } from './model/quistion/quistion.routes.js';
import { interviewSessionRouter } from './model/InterviewSession/InterviewSession.routes.js';
import { feedbackRouter } from './model/Feedback/feedback.route.js';
import { sessionRouter } from './model/Session/session.route.js';
import { courseRouter } from './model/course/course.routes.js';
import { examRouter } from './model/Exam/exam.route.js';
import bodyParser from "body-parser";
import router from './model/Config/chatRoutes.js';
const app = express();
app.use(cors({
    origin: [
        "https://career-boots-clint.vercel.app",
        "http://localhost:3000",
        /\.vercel\.app$/ // সব vercel subdomain allow করবে
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(express.json());
app.use(globalErrorHandler);
app.use(bodyParser.json());
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/mentor', mentorRouter);
app.use('/api/notification', notificationRouter);
app.use('/api/question', questionRouter);
app.use('/api/interviewSession', interviewSessionRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/session', sessionRouter);
app.use('/api/course', courseRouter);
app.use("/api/exam", examRouter);
app.use("/api", router);
app.get('/', (req, res) => {
    res.send('your career is run on the way...');
});
export default app;
//# sourceMappingURL=app.js.map