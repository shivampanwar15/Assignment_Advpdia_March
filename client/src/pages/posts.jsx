import React, { useState, useEffect } from 'react';
import PostCard from '../components/PostCard.jsx';
import Header from '../components/Header.jsx'
function Posts() {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
 
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/get-posts`, {
        method : 'GET',
        headers : {
          'token' : token
        }
        });
        const data = await response.json();

        if (data.length) {
            setPosts(data);
        } 

        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  },[token]);

  return (
    <div>
        <Header/>
      <div className='w-screen min-h-screen h-auto bg-gradient-to-l from-cyan-100 to-blue-100'>
        <div className='w-screen flex justify-center flex-wrap'>
          
          {posts.length >0 ? posts.map((post, index) => (
              <PostCard 
                key={index}
                title = {post.title}
                content ={post.content}
                date={post.date}
              />
            )): <h1> No Posts !</h1>}
        </div>
      </div>
    </div>
  );
}

export default Posts;
