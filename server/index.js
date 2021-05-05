// http://localhost:5000

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// setup routes
app.use('/posts', postRoutes); // adds /posts prefix to all routes in posts.js

app.use(express.urlencoded({ limit: '40mb', extended: true }));
app.use(express.json({ limit: '40mb', extended: true }));
app.use(cors());

// using mongo cloud atlas
const CONNECTION_URL =
  'mongodb+srv://merntut:fuckyou69@merntut.lknvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))
  )
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
