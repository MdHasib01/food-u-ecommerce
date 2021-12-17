import React from "react";

const ShowDate = () => {
  var now = new Date();
  var dayNames = new Array(
    "রবিবার",
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার",
    "শুক্রবার",
    "শনিবার"
  );
  var monNames = new Array(
    "জানুয়ারি",
    "ফেব্রুয়ারী",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর"
  );

  return (
    <div>
      <p>
        {"আজ " +
          dayNames[now.getDay()] +
          " " +
          monNames[now.getMonth()] +
          " " +
          now.getDate() +
          ", " +
          now.getFullYear()}
      </p>
    </div>
  );
};

export default ShowDate;
