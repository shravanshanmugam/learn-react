import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

// import the custom hook and call the function
function CustomHookDocTitle() {
  const [count, setCount] = React.useState(0);
  useDocumentTitle(count);
  return (
    <div className="sub-container">
      <p>Custom Hook Document Title</p>
      <button onClick={() => setCount(count + 1)}>
        Click to update document title!
      </button>
      <p>Count {count}</p>
    </div>
  );
}

export default CustomHookDocTitle;
