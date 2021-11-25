import React, { useState } from "react";
import "./Section.css";
import ItemCategory from "./Item-Category";
import ItemSection from "./ItemSection";

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
      <img className="bg-img" src={`${img[imgIndex]}`} alt="loading" />
      <button id="btn-left" onClick={() => handleImageChange("left")}>
        left
      </button>
      <button id="btn-right" onClick={() => handleImageChange("right")}>
        right
      </button>
      <ItemCategory />
      <ItemSection />
    </>
  );
}

export default Section;
