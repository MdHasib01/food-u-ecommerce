import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import newsImg from "../../../Asects/images/fokrul.jpeg";
import useNewsFetch from "../../../hooks/useNewsFetch";

const News = () => {
  const [allNews] = useNewsFetch();
  return (
    <div>
      <div className="contain">
        <Row md={3}>
          {allNews.map((news) => (
            <Col>
              <Row md={1}>
                <Col>
                  <h2>{news.title}</h2>
                  <p>{news.time}</p>
                  <p>{news.newsDetails.slice(0, 100)}...</p>
                </Col>
                <Col>
                  <img
                    className="img-fluid news-img"
                    src={`data:image/png;base64,${news.image}`}
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default News;
