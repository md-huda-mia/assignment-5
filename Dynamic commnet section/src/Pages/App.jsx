import { useState } from "react";
import "./App.css";
import Comments from "../Comments/Comments";
import { FaCommentAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
// import Comments from './../Comments/Comments';

function App() {
  const [user, setUser] = useState("");
  const [comments, setComments] = useState("");
  const [commentList, setCommentList] = useState([]);

  //clear input
  const clearInput = () => {
    setUser("");
    setComments("");
  };
  //handle input
  const handleInput = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const comment = {
      user,
      comments,
    };
    setCommentList([...commentList, comment]);
    console.log(user);
    clearInput();
  };

  //delete comment
  const deleteComment = (index) => {
    const filteredComment = commentList.filter((comment, i) => index !== i);
    setCommentList(filteredComment);
  };
  return (
    <>
      <div className='container'>
        <form onSubmit={handleInput} className='form-container'>
          <label>
            User Name : <FaRegUser />{" "}
          </label>
          <br></br>
          <input
            required
            onChange={(e) => setUser(e.target.value)}
            value={user}
            type='text'
            className='input-text'
            placeholder='write your name'
          />
          <br></br>
          <label>
            Write Your Comment : <FaCommentAlt />
          </label>
          <br></br>
          <input
            placeholder='write your comment'
            required
            onChange={(e) => setComments(e.target.value)}
            value={comments}
            type='text'
            name=''
            id=''
            className='input-text'
          />
          <br></br>
          <button className='add-btn' type='submit'>
            Add Comment
          </button>
        </form>

      <div className="comment-list">
      <table className='list-column'>
          <tr>
            <th>User</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>
          {commentList.map((comment, index) => (
            // eslint-disable-next-line react/jsx-key
            <Comments
              comment={comment}
              key={index}
              id = {index}
              deleteComment={deleteComment}

            />
          ))}
        </table>
      </div>
        <div className="footer-section">
          <h2>Join our community to comment</h2>
          <h3>
            <a href='#'>sign up</a>
          </h3>
        </div>
        
      </div>
    </>
  );
}

export default App;
