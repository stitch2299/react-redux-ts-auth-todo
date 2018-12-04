import * as React from "react";

export interface Props {
  languageName: string;
  enthusiasmLevel?: number;
  onIncrement?:()=> void;
  onDecrement?:()=> void;
}

const Hello = ({ languageName, enthusiasmLevel=1, onIncrement, onDecrement }: Props) => {
  if(enthusiasmLevel<=0){
    throw new Error("you could be a little more enthusiastic :D");
  }
  return(
    <div className="hello">
      <div className="greeting">
        <p>hello, languageName:{languageName}, enthusiasm:{enthusiasmLevel}</p>
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  )
}

export default Hello;
