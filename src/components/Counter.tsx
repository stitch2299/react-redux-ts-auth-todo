import * as React from "react";

export interface Props {
  count: number;
}

const Counter = ({ count }:Props) => {
  return(
    <div>
      <p>counter: {count}</p>
    </div>
  )
}

export default Counter;
