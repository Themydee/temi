import React, { useEffect, useState } from "react";
import PortfolioItems from "./PortfolioItems";
import { projectsData, projectsDataNav } from "./PortfolioData";

const PortfolioWork = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [visibleItem, setVisibleItem] = useState(4);
  const [hideLoadMore, setHideLoadMore] = useState(false);

  const loadMore = projects.slice(0, visibleItem);

  const handleLoadMore = () => {
    if (loadMore.length < projectsData.length) {
      setVisibleItem(visibleItem + 4);
    }
  };

  useEffect(() => {
    if (loadMore.length === projectsData.length) {
      setHideLoadMore(true);
    }
  }, [loadMore, projects]);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="portfolio-works">
      <div className="portfolio-filters">
        {projectsDataNav.map((item, index) => (
          <span
            onClick={(e) => {
              handleClick(e, index);
            }}
            className={`${
              active === index ? "active-portfolio" : ""
            } portfolio-item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="portfolio-container container grid">
        {loadMore.map((item, i) => (
          <PortfolioItems item={item} key={i} />
        ))}
      </div>
      {!hideLoadMore ? (
        <button
          onClick={handleLoadMore}
          className="button load-more button-flex"
        >
          Load More
          <svg
            className="button__icon-briefcase"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--container-color)"
              d="M16.242 17.242a6.04 6.04 0 0 1-1.37 1.027l.961 1.754a8.068 8.068 0 0 0 2.569-2.225l-1.6-1.201a5.938 5.938 0 0 1-.56.645zm1.743-4.671a5.975 5.975 0 0 1-.362 2.528l1.873.701a7.977 7.977 0 0 0 .483-3.371l-1.994.142zm1.512-2.368a8.048 8.048 0 0 0-1.841-2.859l-1.414 1.414a6.071 6.071 0 0 1 1.382 2.146l1.873-.701zm-8.128 8.763c-.047-.005-.094-.015-.141-.021a6.701 6.701 0 0 1-.468-.075 5.923 5.923 0 0 1-2.421-1.122 5.954 5.954 0 0 1-.583-.506 6.138 6.138 0 0 1-.516-.597 5.91 5.91 0 0 1-.891-1.634 6.086 6.086 0 0 1-.247-.902c-.008-.043-.012-.088-.019-.131A6.332 6.332 0 0 1 6 13.002V13c0-1.603.624-3.109 1.758-4.242A5.944 5.944 0 0 1 11 7.089V10l5-4-5-4v3.069a7.917 7.917 0 0 0-4.656 2.275A7.936 7.936 0 0 0 4 12.999v.009c0 .253.014.504.037.753.007.076.021.15.03.227.021.172.044.345.076.516.019.1.044.196.066.295.032.142.065.283.105.423.032.112.07.223.107.333.026.079.047.159.076.237l.008-.003A7.948 7.948 0 0 0 5.6 17.785l-.007.005c.021.028.049.053.07.081.211.272.433.538.681.785a8.236 8.236 0 0 0 .966.816c.265.192.537.372.821.529l.028.019.001-.001a7.877 7.877 0 0 0 2.136.795l-.001.005.053.009c.201.042.405.071.61.098.069.009.138.023.207.03a8.038 8.038 0 0 0 2.532-.137l-.424-1.955a6.11 6.11 0 0 1-1.904.102z"
            ></path>
          </svg>
        </button>
      ) : (
        <p className="load-after">
          Thats all projects for now, Do well to{" "}
          <a href="#contact">contact us</a>
        </p>
      )}
    </div>
  );
};

export default PortfolioWork;
