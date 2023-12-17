/* eslint-disable react/prop-types */


const PostDetails = ({posts}) => {
    const  {id, title, body} = posts
    return (
        <div className="postDetails">
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
    );
};

export default PostDetails;