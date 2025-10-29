import express from 'express'
import cors from 'cors'
import globalErrorHandler from './model/middleware/globalErrorHandler.js'
import { userRouter } from './model/user/user.routes.js'
import { authRouter } from './model/auth/auth.routes.js'
import { notificationRouter } from './model/Notification/notification.routes.js'
import { mentorRouter } from './model/mentor/mentor.routes.js'
import { questionRouter } from './model/quistion/quistion.routes.js'
import { interviewSessionRouter } from './model/InterviewSession/InterviewSession.routes.js'
import { feedbackRouter } from './model/Feedback/feedback.route.js'
import { sessionRouter } from './model/Session/session.route.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use(globalErrorHandler)

app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/mentor',mentorRouter)
app.use('/api/notification',notificationRouter)
app.use('/api/question',questionRouter)
app.use('/api/interviewSession',interviewSessionRouter)
app.use('/api/feedback',feedbackRouter)
app.use('/api/session',sessionRouter)

app.get('/',(req,res)=>{
    res.send('your career is run on the way...')
})

export default app;