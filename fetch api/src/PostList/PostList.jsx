/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import PostDetails from "../assets/PostDetails/PostDetails";
import './PostList.css'

const PostList = () => {
    // eslint-disable-next-line no-unused-vars
    const [post, setPost] = useState([])
    const [details, setDetails] = useState('')
        // eslint-disable-next-line no-unused-vars
        const url = 'https://jsonplaceholder.typicode.com/posts'
        useEffect(() => {
          fetch(url)
          .then (res => res.json())
          .then(data => setPost(data))
        }, [])
    return (
       <div>
            <h1 className="heading">Fetching and Displaying Posts from JSONPlaceholder API</h1>
         <div className="postList">
           {post.map((posts) => (
            <PostDetails posts = {posts}/>
           ))}
        </div>
       </div>
    );
};

export default PostList;