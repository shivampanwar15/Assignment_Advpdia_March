import React, {useState} from 'react'
import Header from '../components/Header.jsx'
import { useNavigate} from 'react-router-dom'



export default function NewPost() {



    const [post, setPost] = useState({ title: "", content: "" });
    const token = localStorage.getItem('token') || "";
    const onChange = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
      }
      const navigate = useNavigate();


      const AddPost = async (e) => {
        e.preventDefault();
    
        const response = await fetch(`http://localhost:8000/api/new-post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token': token,
          },
          body: JSON.stringify({ title: post.title, content: post.content})
        });

        const jsonData =  await response.json();
    
        if (!jsonData.success) {
          alert("Try again to create. Please ensure that you Logged In");
        }
        else {
          navigate("/posts");
        }
      }




  return (
    <>
    
    
    <Header/>
    <div className="flex flex-1 flex-col px-6 py-6 w-screen h-screen bg-gradient-to-l from-cyan-100 to-blue-100">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create a Post !
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
            Title
          </label>
          <div className="mt-2">
            <input
              id="title"
              name="title"
              type="text"
              value={post.title}
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
              Write your thought here!
            </label>
           
          </div>
          <div className="mt-2">
            <textarea
              id="content"
              name="content"
              type="text"
              value={post.content}
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={AddPost}>
             Add Post
          </button>
        </div>
      </form>

    </div>
  </div>
    
    
    
    </>
  )
}

