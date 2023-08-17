import React from "react";
import { personalInfo } from "../data";

const Info = () => {
  const personalDetail = personalInfo.map(({ title, description }, index) => {
    return (
      <li className="info--item" key={index}>
        <span className="info--title">{title}</span>
        <span className="info--description">{description}</span>
      </li>
    );
  });
  return <>{personalDetail}</>;
};

export default Info;
