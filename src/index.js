import React from "react";
import ReactDOM from "react-dom";
import StoryWorkshop from "./path-to-your-main-component"; // Replace with actual path

const App = () => {
  try {
    return <StoryWorkshop />;
  } catch (error) {
    console.error("Error rendering StoryWorkshop:", error);
    return <div>Something went wrong. Please check the console for details.</div>;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
