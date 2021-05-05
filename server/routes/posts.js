// all routes that use /posts
// handlers are in: /server/controllers/posts.js
import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/', createPost);

export default router;
