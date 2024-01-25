import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Comments from "../Comments.jsx";
import Form from "react-bootstrap/Form";
import { Plus } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

function CommentArea({ commentData, setCommentData, post, id }) {
  const [comments, setComments] = useState([]);
  const [commentShow, setCommentShow] = useState(false);

  console.log(commentShow);

  useEffect(() => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/books/${post._id}/comments`
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
          <div>
            <Button onClick={() => setCommentShow(!commentShow)}>
              Aggiungi un commento
            </Button>
          </div>
        </Card.Body>
      </Card>
      <div>
        <Comments
          post={post}
          id={post._id}
          setComments={setComments}
          comments={comments}
          open={commentShow}
          onHide={setCommentShow}
        />
      </div>

      {comments.map((elem) => (
        <>
          <Card key={elem._id}>
            <Card.Body>
              <Card.Text>
                {
                  <>
                    <span className="fw-bold">{elem.author}</span>  {": "+ elem.comment}
                  </>
                }
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      ))}
    </div>
  );
}

export default CommentArea;
