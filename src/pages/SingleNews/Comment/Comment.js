import React, { useEffect, useState } from "react";

const Comment = ({ newsId }) => {
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);
  const handleComment = (e) => {
    e.preventDefault();
    const commentData = {
      comment,
      newsId,
    };

    fetch("http://localhost:8000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("success!");
          e.target.reset();
          setSuccess("News added successfully");
          console.log("News added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const [showComments, setShowComments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/comments?newsId=${newsId}`)
      .then((res) => res.json())
      .then((data) => setShowComments(data));
  }, [showComments]);
  return (
    <div>
      <p>This is comment of: {newsId}</p>
      <form onSubmit={handleComment}>
        <p>আপনার মন্তব্য দিন: </p>
        <input
          required
          type="text"
          placeholder="মন্তব্য"
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
      <div>
        <p>Comments({showComments.length})</p>
        {showComments.map((comments) => (
          <div key={comments._id}>
            <p>{comments.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
