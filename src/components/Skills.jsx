import React from "react";
import { skills } from "../data";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const skill = skills.map(({ title, percentage }, index) => {
    return (
      <div className="progress-box" key={index}>
        <div className="progress--circle">
          <CircularProgressbar
            strokeWidth={6.5}
            text={`${percentage}%`}
            value={percentage}
          />
        </div>
        <h3 className="skills--title">{title}</h3>
      </div>
    );
  });
  return <>{skill}</>;
};

export default Skills;
