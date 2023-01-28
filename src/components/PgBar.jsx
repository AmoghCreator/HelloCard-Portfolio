import React, { useState, useEffect, useRef } from "react";
import "./compStyles/pgBar.css";

function PgBar(props) {
  const [pos, setPos] = useState(0);
  const prvs = useRef(0);
  useEffect(() => {
    if (!(props.page === 3)) {
      document.getElementById(`${props.page}`).style.backgroundColor = "white";

      if (props.page > 0 || prvs.current === 1) {
        document.getElementById(`${prvs.current}`).style.backgroundColor =
          "transparent";
      }
      prvs.current = props.page;
    }
  }, [props.page]);
  return (
    <div className="main">
      {/* {props.val} */}
      <div className="circle" id="0" style={{}}></div>
      <div className="circle" id="1" style={{}}></div>
      <div className="circle" id="2" style={{}}></div>
      <div className="circle" id="4" style={{}}></div>
    </div>
  );
}

export default PgBar;
