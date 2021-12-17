import React, { useEffect, useState } from "react";

const useNewsFetch = () => {
  const [reverseNews, setReverseNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/allnews")
      .then((res) => res.json())
      .then((data) => setReverseNews(data));
  }, []);

  var allNews = reverseNews.reduceRight(function (arr, last, index, coll) {
    return (arr = arr.concat(last));
  }, []);
  return [allNews];
};

export default useNewsFetch;
