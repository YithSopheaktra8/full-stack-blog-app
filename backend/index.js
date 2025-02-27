import express from 'express';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import webHookRouter from './routes/webhook.route.js';
import connectDb from './lib/connectDb.js';

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/webhooks",webHookRouter)


// Error handling middleware global level
app.use((error,req,res,next) => {

  res.status(error.status || 500);

  res.status(500).json({
    message: error.message || 'Something went wrong',
    status: error.status,
    stack: error.stack,
  });
})

app.listen(3000, () => {
  connectDb();
  console.log('Server is running on port 3000');
});