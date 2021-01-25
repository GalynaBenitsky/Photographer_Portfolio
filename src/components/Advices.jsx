import React from "react";
import advice from "./common/templates/advice";
import SingleAdvice from "./common/SingleAdvice";

const Advices = () => {
  return (
    <div className="container">
      <h1>Поради</h1>
      {advice.map((createAdvice) => {
        return (
          <SingleAdvice
            key={createAdvice.id}
            icon={createAdvice.icon}
            description={createAdvice.description}
          />
        );
      })}
    </div>
  );
};

export default Advices;
