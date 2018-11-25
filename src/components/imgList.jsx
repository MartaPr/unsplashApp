import React from "react";
import Img from "./img";
import EmptyList from "./emptyList";

const ImgList = props => {
  const results = props.data;
  let items;
  results.length > 0
    ? (items = results.map(item => <Img url={item.urls.small} key={item.id} />))
    : (items = <EmptyList />);

  return (
    <ul className="image-row" style={{ listStyle: "none" }}>
      {items}
    </ul>
  );
};

export default ImgList;
