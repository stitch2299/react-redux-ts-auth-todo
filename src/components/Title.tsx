import * as React from "react";

export interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return (
    <h2>{text}</h2>
  )
}

export default Title;