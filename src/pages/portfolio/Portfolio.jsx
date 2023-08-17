import React from "react";
import { portfolio } from "../../data";
import PortFolioItem from "../../components/PortFolioItem";
import "./portfolio.css";

const Portfolio = () => {
  const portfolioItems = portfolio.map((item) => {
    return <PortFolioItem key={item.id} {...item} />;
  });
  return (
    <section className="portfolio section">
      <h2 className="section--title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio--container container grid">
        {portfolioItems}
      </div>
    </section>
  );
};

export default Portfolio;
