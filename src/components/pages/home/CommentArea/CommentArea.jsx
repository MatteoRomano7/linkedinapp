import { useState, useEffect } from "react";

function CommentArea({ post }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/books/${post._id}/comments`
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return <div>
    {comments.map(elem => <p key={elem._id}>{elem.comment}</p>)}

  </div>;
}

export default CommentArea;
