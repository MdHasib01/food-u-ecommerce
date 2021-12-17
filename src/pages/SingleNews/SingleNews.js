import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Comment from "./Comment/Comment";

const SingleNews = () => {
  const { id } = useParams();
  //   const id = useLocation();
  const [news, setNews] = useState([]);
  useEffect(
    () => [
      fetch(`http://localhost:8000/allnews/${id}`)
        .then((res) => res.json())
        .then((data) => setNews(data)),
    ],
    []
  );
  return (
    <div className="body-container">
      <div className="top-add">
        <img
          width="970"
          height="90"
          src="https://i.ibb.co/cyWHXdh/14349274497265834184.gif"
          alt=""
        />
      </div>
      <hr />
      <div className="single-news-container">
        <div>
          <div>
            <h3>{news.category}</h3>
            <h2 className="title">{news.title}</h2>
            <p>
              {news.reporter}, {news.address}
            </p>
            <hr />
          </div>
          <div className="single-news-details">
            <img
              width="100%"
              src={`data:image/png;base64,${news.image}`}
              alt=""
            />
            <p>{news.newsDetails}</p>
            <hr />
            <hr />
            <div className="comment">
              <h2>মন্তব্য করুন</h2>
              <div>social icon</div>
            </div>
            <hr />
            <Comment newsId={news._id} />
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/HXcfLN6/9656093656252652900.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
