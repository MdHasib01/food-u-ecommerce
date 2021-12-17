import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsByCatagory = () => {
  const { categoryName } = useParams();
  const [categoriesNews, setCategoriesNews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/category?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => setCategoriesNews(data));
  }, [categoryName]);
  return (
    <div>
      <h2>This is the news of: {categoryName}</h2>
      {categoriesNews.map((news) => (
        <div>
          <h2>{news.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default NewsByCatagory;
