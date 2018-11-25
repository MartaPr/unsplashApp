import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFrown from "@fortawesome/fontawesome-free-solid/faFrown";

const EmptyList = () => {
  return (
    <div className="no-items">
      <FontAwesomeIcon icon={faFrown} />
      <p className="msg-txt"> Ooops, there is nothing to show...</p>
    </div>
  );
};
 
export default EmptyList;
