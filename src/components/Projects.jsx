import React, { Suspense } from "react";
import "./compStyles/projects.css";
import { motion, spring } from "framer-motion";
import Works from "./Works";
import worksData from "../works.json";
function Projects() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <div>
          <h1 style={{ color: "white", position: "relative", bottom: "10vh" }}>
            Here are Some of My Works
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2vw",
          }}
        >
          {worksData.map((elem) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", delay: 1 }}
              >
                <Works data={elem} />;
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
