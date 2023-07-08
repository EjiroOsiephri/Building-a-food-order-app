import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <input ref={ref} {...props.input} />
    </React.Fragment>
  );
});

export default Input;
