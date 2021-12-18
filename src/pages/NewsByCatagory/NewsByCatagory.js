import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const NewsByCatagory = () => {
  const { categoryName } = useParams();
  const [reverseCategoriesNews, setReverseCategoriesNews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/category?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => setReverseCategoriesNews(data));
  }, [categoryName]);

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/latest_news/${id}`);
  };
  var categoriesNews = reverseCategoriesNews.reduceRight(function (arr, last) {
    return (arr = arr.concat(last));
  }, []);
  return (
    <div className="body-container">
      <div className="top-add">
        <img
          className="img-fluid"
          max-width="970"
          max-height="90"
          src="https://i.ibb.co/cyWHXdh/14349274497265834184.gif"
          alt=""
        />
      </div>
      <hr />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-7">
          <h1 className="news-catagory-head">{categoryName}</h1>
          <hr />
          {categoriesNews.map((news) => (
            <div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <img
                    className="img-fluid"
                    src={`data:image/png;base64,${news.image}`}
                    alt=""
                  />
                </div>
                <div className="col-md-8">
                  <h3
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick(news._id)}
                  >
                    {news.title}
                  </h3>
                  <p className="news-details-para">
                    {news.newsDetails.slice(3, 200)}...
                  </p>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <div className="col-md-3">
          <p className="text-center adds-text">বিজ্ঞাপন</p>
          <img
            max-width="300"
            max-height="250"
            className="img-fluid"
            src="https://i.ibb.co/HXcfLN6/9656093656252652900.gif"
            alt="adds"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsByCatagory;
