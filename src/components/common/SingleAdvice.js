import React from "react";
import "../../styles/Advices.css";

export const SingleAdvice = (props) => {
  return (
    <div>
      <section className="third">
        <span className="icon display-2">
          <i className={props.icon}></i>
        </span>
        <span className="text">{props.description}</span>
      </section>
    </div>
  );
};
export default SingleAdvice;
