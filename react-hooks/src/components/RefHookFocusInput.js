import React from "react";

function RefHookFocusInput() {
  // useRef hook accepts initial value and return reference object
  // we pass initial value as null
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    // side effects execute after first render, so inputRef object will have reference to input element attached using the ref attribute
    inputRef.current.focus();
  }, []);
  return (
    <div className="ref-container">
      <p>Ref Hook Focus Input</p>
      {/* attach reference object to element using the ref attribute */}
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default RefHookFocusInput;
