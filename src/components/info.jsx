import React from "react";
import "./compStyles/info.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Projects from "./Projects";

function Info(props) {
  var styles = {
    color: "white",
    position: "relative",
    bottom: "0",
    content: "I am a full stack Web Developer!",
    transition: "all 1s",
  };
  if (props.page === 2) {
    styles = {
      color: "blue",
      position: "relative",
      bottom: "38vh",
      transition: "all 1s",
      content: "HELLO",
    };
  }
  if (props.page === 3) {
    styles = {
      color: "blue",
      position: "relative",
      bottom: "10vh",
      content: "HELLO",
    };
  }
  return (
    <h1 className="text" id="varyText" style={styles}>
      I am a full stack Web Developer!
    </h1>
  );
}

export default Info;
