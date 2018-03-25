import React from "react";

const FavoriteButton = props => {
  return <button className="favbtn" onClick={() => props.add()} />;
};

export default FavoriteButton;
