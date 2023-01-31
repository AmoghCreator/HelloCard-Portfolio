import React from "react";

function HelloCard() {
  return (
    <div className="helloCard" style={{ position: "realative", zIndex: 10 }}>
      <div className="helloCardRedPart upperRed">
        <h3>
          <span style={{ fontSize: "2.4em" }}>Hello! 👋</span>
          <br /> My Name is :-
        </h3>
      </div>
      <div className="namePart">
        <h1>Amogh</h1>
      </div>
      <div className="helloCardRedPart lowerRed">
        <h3>Nice to meet you!</h3>
      </div>
    </div>
  );
}

export default HelloCard;
