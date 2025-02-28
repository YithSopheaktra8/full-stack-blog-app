import express from 'express';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import webHookRouter from './routes/webhook.route.js';
import connectDb from './lib/connectDb.js';
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors';


const app = express();

app.use(cors(process.env.CLIENT_URL));

// Clerk Middleware to authenticate the user or give permission to access the routes
app.use(clerkMiddleware())

// put the webhook router before the json middleware because we need to parse the raw body using bodyParser.raw
app.use("/webhooks",webHookRouter)

app.use(express.json());

// imagekit middleware
// allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// testing auth state of the user 
// app.get('/auth-state', (req, res) => {

//   const authState = req.auth

//   res.json({
//     authState
//   });
// });

// app.get("/protect", (req, res) => {

//   const { userId } = req.auth
//   if(!userId){
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }

//   res.status(200).json({
//     message: "Protected route",
//   }); 
// });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);


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