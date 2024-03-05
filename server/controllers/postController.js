import postService from '../services/postServices.js';

const postController = {

  getPosts: async (req, res) => {
    try {
      const posts = await postService.getPosts();
      res.status(200).json(posts);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },


  createPost: async (req, res) => {
    try {
    
      const postData = req.body;

      const newPost = await postService.createPost(postData);
      res.status(201).json(newPost);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

export default postController;
