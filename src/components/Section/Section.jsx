import React, { useState } from "react";
import "./Section.css";
import ItemCategory from "./Item-Category";

function Section(props) {
  const [imgIndex, setIndex] = useState(0);
  const img = [
    "/images/background3.jpg",
    "/images/background1.jpg",
    "/images/background2.jpg",
    "/images/background4.jpg",
  ];
  function handleImageChange(side) {
    if (side === "left") setIndex(imgIndex === 0 ? imgIndex : imgIndex - 1);
    if (side === "right") setIndex(imgIndex === 3 ? imgIndex : imgIndex + 1);
  }
  return (
    <>
      <div className="image-cont">
        <img className="bg-img" src={`${img[imgIndex]}`} alt="loading" />
        <button id="btn-left" onClick={() => handleImageChange("left")}>
          <img
            src="https://th.bing.com/th/id/R.4429c048bc563da17f6d7b20919689ce?rik=J2u61iN5E9S%2b9Q&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fsign-left-icon.png&ehk=0JeD9O%2fauxLHw7QE3WW8hJgsZB7Hn%2fG8y57GAwJxm%2f0%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </button>
        <button id="btn-right" onClick={() => handleImageChange("right")}>
          <img
            src="https://th.bing.com/th/id/R.f924fb68bee9bade90ecf8b26bc40638?rik=rjQuG0bFyG05Tg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fsign-right-icon.png&ehk=fa6F4uI1E2DudiSEwNVKYb8QJFYzl6Mec8zdJx15svU%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </button>
      </div>
      <ItemCategory />
    </>
  );
}

export default Section;
