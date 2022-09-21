import React from "react";
import imgSource from "../../assets/dogs.jpg";
import HomeIcon from "../../assets/icons/homeIcon.svg";

const AssetsComponent = () => {
  const randomNum = Math.random() * 100;
  return (
    <div>
      <HomeIcon />
      <h1>App js file</h1>
      <p className="paragraph">Number is: {randomNum}</p>
      <img src={imgSource} />
    </div>
  );
};

export default AssetsComponent;
