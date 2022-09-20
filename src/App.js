import React from "react";
import "./styles.scss";

const App = () => {
  const num = Math.random() * 100;

  return (
    <div id="main_container">
      <h1>App js file</h1>
      <p className="paragraph">Number is: {num}</p>
    </div>
  );
};

export default App;
