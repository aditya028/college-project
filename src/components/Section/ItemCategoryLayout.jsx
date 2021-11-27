import React from "react";
import { Link } from "react-router-dom";
import "./ItemCategoryLayout.css";

function ItemCategoryLayout({ title, path }) {
  return (
    <div className="card">
      <img src={`${path}`} alt={`${title}`} />
      <div id="title">
        <Link to={`/${title}`}>{title}</Link>
      </div>
    </div>
  );
}

export default ItemCategoryLayout;
