import * as React from "react";

export interface Props {
  doubleAddHandler: ()=>void;
}

const DoubleAddButton = ({ doubleAddHandler }:Props) => {
  return(
    <div>
      <button onClick={doubleAddHandler}>doubleAdd</button>
    </div>
  )
}

export default DoubleAddButton;
