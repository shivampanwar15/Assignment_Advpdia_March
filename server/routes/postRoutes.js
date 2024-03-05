
import express from 'express';
import postController from '../controllers/postController.js';
import authenticateToken from '../middlewares/authMiddlewar.js'

const router = express.Router();

router.get('/get-posts', authenticateToken, postController.getPosts);
router.post('/new-post', authenticateToken, postController.createPost);

export default router;
