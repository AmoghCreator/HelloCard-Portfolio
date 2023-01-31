import React from "react";
import worksData from "../works.json";
import { motion } from "framer-motion";
import "./compStyles/works.css";

function Works(props) {
  function linker(x) {
    if (x != null)
      return (
        <a
          href={props.data.link}
          style={{ textDecoration: "none", paddingLeft: "5px" }}
        >
          Read More
        </a>
      );
  }

  return (
    <div
      className="work-card"
      style={{ color: "white", width: 400, borderStyle: "solid " }}
    >
      <h1>{props.data.title}</h1>
      <img style={{ width: 300, height: 200 }} src={props.data.img} alt="" />

      <h2>{props.data.descr}</h2>
      <button className="btn">{linker(props.data.link)}</button>
    </div>
  );
}

export default Works;
