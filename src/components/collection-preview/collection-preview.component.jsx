import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  console.log(title, items)
  return(
  <div className="collection-preview">
    <h1 className="title">{title && title.toUpperCase()}</h1>
    <div className="preview">
      {items && items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)};

export default CollectionPreview;
