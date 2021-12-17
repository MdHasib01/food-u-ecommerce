import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useNewsFetch from "../../hooks/useNewsFetch";

const LatestNews = () => {
  const [allNews] = useNewsFetch();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/latest_news/${id}`);
  };
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
      <div className="news-container">
        <p>News: {allNews.length}</p>
        <h1 className="news-catagory-head">সর্বশেষ</h1>
        <hr />
      </div>
      <div className="news-row-container">
        <div></div>
        <div className="allnews-row">
          {allNews.length === 0 ? (
            <div className="loader">
              <Spinner animation="border" />
            </div>
          ) : (
            <div>
              {allNews.map((news) => (
                <div>
                  <div className="news-in-row">
                    <div>
                      <h3
                        style={{ cursor: "pointer" }}
                        onClick={() => handleClick(news._id)}
                      >
                        {news.title}
                      </h3>
                      <p className="news-details-para">
                        {news.newsDetails.slice(0, 200)}...
                      </p>
                      <p>
                        {news.reporter}, {news.address}
                      </p>
                    </div>
                    <div className="news-image-area">
                      <div className="news-row-image">
                        <img
                          className="img-fluid"
                          src={`data:image/png;base64,${news.image}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
              <div className="loadmore">
                <button className="primary-btn">আরও</button>
              </div>
            </div>
          )}
        </div>
        <div>
          <div>
            <img
              width="300"
              height="250"
              src="https://i.ibb.co/HXcfLN6/9656093656252652900.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
