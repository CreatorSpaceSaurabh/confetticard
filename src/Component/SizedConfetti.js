import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";

import ReactConfetti from "../src/ReactConfetti";

export default React.forwardRef((passedProps, ref) => {
  const { width, height } = useWindowSize();
  return (
    <ReactConfetti width={width} height={height} {...passedProps} ref={ref} />
  );
});
