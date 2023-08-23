import React from "react";

/**
 * custom hook should start with keyword use
 * this is simply a wrapper function to useEffect hook
 * accept state information as function parameters
 */
function useDocumentTitle(count) {
  React.useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocumentTitle;
