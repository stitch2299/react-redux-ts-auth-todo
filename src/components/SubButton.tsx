import * as React from "react";

export interface Props {
  subHandler: ()=>void;
}

const SubButton = ({ subHandler }:Props) => {
  return(
    <div>
      <button onClick={subHandler}>sub</button>
    </div>
  )
}

export default SubButton;
