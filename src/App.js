import "./App.css";
import HelloCard from "./components/HelloCard";
import Projects from "./components/Projects";
import Info from "./components/info";
import Contact from "./components/Contact";
import "./components/compStyles/helloCard.css";
import React, { useState, useRef, useEffect } from "react";
import PgBar from "./components/PgBar";
import { animate, AnimatePresence, motion } from "framer-motion";
// document.addEventListener("scroll", () => {
//   console.log("hello");
// });

function App() {
  const [state, setState] = useState(0);
  const [pg, setpg] = useState(0);
  const [barState, setBarState] = useState(0);
  function trak() {
    var pos = parseInt(window.scrollY / 100);
    if (pos > 0 && pos < 8) setpg(0);
    if (pos > 8 && pos < 16) setpg(1);
    if (pos > 16 && pos < 22) {
      setpg(2);
    }
    if (pos > 22 && pos < 32) setpg(4);
  }
  function logit() {
    console.log(parseInt(window.scrollY / 100) + " " + pg);
    setState(window.scrollY);
    trak();
  }
  useEffect(() => {
    document.addEventListener("scroll", logit);
    return () => document.removeEventListener("scroll", logit);
  }, [window.scrollY]);
  return (
    <div className="BigBigWrapper">
      <div className="App">
        <div className="intro">
          <div className="cardWrapper" onClick={() => {}}>
            {/* implement framer motion for the below component */}
            <AnimatePresence>
              {state >= 0 && state < 800 && (
                <motion.div
                  animate={{}}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                >
                  <HelloCard />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {state > 800 && state < 1600 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", delay: 0.4 }}
                >
                  <Info page={pg} />
                </motion.div>
              )}
              {state > 1600 && state < 2400 && <Projects />}
              {state > 2400 && state < 3200 && <Contact />}
            </AnimatePresence>
          </div>
          {/* <div>
          <h2 className="text"> I am a Full Stack Web Developer! </h2>
        </div> */}
        </div>
        <PgBar page={pg} />
      </div>
    </div>
  );
}

export default App;
