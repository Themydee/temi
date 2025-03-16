import React from 'react'

const PortfolioItems = ({ item }) => {
  return (
    <div className='portfolio-card'>
        <img src={item.image} alt="Portfolio Works" className='portfolio-img' />
        <h3 className="portfolio-title">{item.title}</h3>
        <p className="portfolio-desc">{item.desc}</p>
       <ul>
           <li style="display:inline-block;">
              <a href={item.url} className="portfolio-btn" target="_blank" rel="noreferrer">
                  View <i className="bx bx-right-arrow-alt portfolio-btn-icon"></i>
              </a>
           </li>

           <li style="display:inline-block;">
              <a href={item.code} className="portfolio-btn" target="_blank" rel="noreferrer">
                  Code <i className="bx bx-right-arrow-alt portfolio-btn-icon"></i>
              </a>
           </li>
       </ul> 
    </div>
  )
}

export default PortfolioItems
