import React from "react";

export const Social = (props) => {
  return (
    <>
      <a href={props.url}>
        <i className={props.icon}></i>
      </a>
    </>
  );
};
export default Social;
