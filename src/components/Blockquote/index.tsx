import React, { FC } from "react";

type BlockquoteProps = {
  children: React.ReactNode;
};

const Blockquote: FC<BlockquoteProps> = (props) => {
  return (
    <blockquote
      style={{
        maxWidth: "100%",
        width: "100%",
        wordBreak: "break-word",
        caretColor: "rgba(255, 255, 255, 0.9)",
        borderLeft: "3px solid currentcolor",
        margin: "0",
        paddingLeft: "0.9em",
        paddingRight: "0.9em",
      }}
    >
      {props.children}
    </blockquote>
  );
};

export default Blockquote;
