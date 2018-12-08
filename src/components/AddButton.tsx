import * as React from "react";

export interface Props {
  addHandler: ()=>void;
}

const AddButton = ({ addHandler }:Props) => {
  return(
    <div>
      <button onClick={addHandler}>add</button>
    </div>
  )
}

export default AddButton;
