import React from "react";
import "./categoryItem.css";

function CategoryItem(props) {
  return (
    <div className="card">
      <img className="bg-img" src={`${props.path}`} alt={`${props.title}`} />
      <div id="title">
        <a href={`#${props.title}`}>{props.title}</a>
      </div>
    </div>
  );
}

export default CategoryItem;
