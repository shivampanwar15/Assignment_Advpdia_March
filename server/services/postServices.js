import Post from '../models/Post.js';

const postService = {
  getPosts: async () => {
    try {
      

      const allPosts = await Post.find();

      return allPosts

    } catch (error) {
      return { message: 'Internal Server Error' };
    }
  },


  createPost : async(data) => {

    try {

      const newPost = new Post({
        title : data.title,
        content : data.content
      })

      await newPost.save();
      
    } catch (error) {
      
    }

  }


};

export default postService;
