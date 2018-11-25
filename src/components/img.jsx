import React from "react";

const Img = props => {
  return (
    <li className="image-column">
      <img className="image" src={props.url} alt=":(" />
    </li>
  );
};

export default Img;
