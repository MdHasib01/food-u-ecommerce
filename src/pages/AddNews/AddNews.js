import React, { useState } from "react";
import { Container } from "react-bootstrap";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [newsDetails, setNewsDetails] = useState("");
  const [category, setcategory] = useState("বিশেষ");
  const [time, setTime] = useState(new Date());
  const [reporter, setReporter] = useState("নিজস্ব প্রতিবেদক");
  const [address, setAddress] = useState("নওয়াপাড়া");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("newsDetails", newsDetails);
    formData.append("category", category);
    formData.append("time", time);
    formData.append("reporter", reporter);
    formData.append("address", address);
    formData.append("image", image);

    fetch("http://localhost:8000/allnews", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("News added successfully");
          console.log("News added successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <p>Title Here</p>
          <label>সংবাদ এর শিরোনামঃ </label>
          <input
            type="text"
            placeholder="শিরোনাম"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <p>বিস্তারিত সংবাদঃ</p>
          <textarea
            cols="50"
            rows="10"
            placeholder="বিস্তারিত"
            onChange={(e) => setNewsDetails(e.target.value)}
          ></textarea>
          <br />
          <lebel for="category">ক্যাটাগরি নির্ধারণ করুনঃ </lebel>
          <select
            defaultValue="বিশেষ"
            name="category"
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="বিশেষ">বিশেষ</option>
            <option value="রাজনীতি">রাজনীতি</option>
            <option value="করোনাভাইরাস">করোনাভাইরাস</option>
            <option value="আঞ্চলিক">আঞ্চলিক</option>
            <option value="বাংলাদেশ">বাংলাদেশ</option>
            <option value="বিশ্ব">বিশ্ব</option>
            <option value="শিক্ষা">শিক্ষা</option>
            <option value="খেলা">খেলা</option>
          </select>
          <br />
          <label>প্রকাশ এর সময়ঃ</label>
          <input
            type="text"
            disabled
            defaultValue={new Date()}
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          <label>সংবাদ রিপোর্টের</label>
          <input
            type="text"
            placeholder="News Reporter"
            defaultValue="নিজস্ব প্রতিবেদক"
            onChange={(e) => setReporter(e.target.value)}
          />
          <br />
          <label>ঠিকানা</label>
          <input
            type="text"
            placeholder="News Reporter"
            defaultValue="নওয়াপাড়া"
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <br />
          <br />
          <button type="submit">Upload News</button>
        </form>
        {success && <p style={{ color: "green" }}>{success}</p>}
      </Container>
    </div>
  );
};

export default AddNews;
