import React from 'react'
import PortfolioWork from './PortfolioWork';
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">My recent works</span>
      <PortfolioWork />
    </section>
  )
}

export default Portfolio