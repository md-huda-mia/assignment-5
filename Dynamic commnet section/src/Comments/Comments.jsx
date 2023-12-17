/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FaDeleteLeft } from "react-icons/fa6";

const Comments = (props) => {
  const { user, comments } = props.comment;
  return (
    <>
      <tr className="comment-details">
        <td>{user}</td>
        <td>{comments}</td>
        <td onClick={() => props.deleteComment(props.id)}>
          <FaDeleteLeft color='red' />
        </td>
      </tr>
    </>
  );
};

export default Comments;
