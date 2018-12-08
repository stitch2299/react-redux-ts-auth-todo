import * as React from "react";

export interface Props {
  resetHandler: ()=>void;
}

const ResetButton = ({ resetHandler }:Props) => {
  return(
    <div>
      <button onClick={resetHandler}>reset</button>
    </div>
  )
}

export default ResetButton;
