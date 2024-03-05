import React from 'react';
import Home from './pages/home.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Posts from './pages/posts.jsx';
import NewPost from './pages/newPost.jsx';
import Postpage from './pages/postpage.jsx';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path= "/posts" element={ <Posts />}/>
        <Route exact path= "/newpost" element={ <NewPost />}/>
        <Route exact path= "/post" element={ <Postpage />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
