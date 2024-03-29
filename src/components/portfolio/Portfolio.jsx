import React from 'react';
import { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';


const Portfolio = () => {

  const [items, setItems] = useState(Menu);
  const filterItems = (categoryItem)=>{
    const updatedItems = Menu.filter((curElem)=>{
      return curElem.category === categoryItem;
    })
    setItems(updatedItems);
  }
  return (
    <div>
      <section className="work container section" id="work">
        <h2 className="section__title">
          Recent Works
        </h2>
        <div className="work__filters">
          <span className="work__item" onClick={()=> setItems(Menu)}>Everything</span>
          <span className="work__item" onClick={()=> filterItems("Creative")}>Creative</span>
          <span className="work__item" onClick={()=> filterItems("Art")}>Art</span>
          <span className="work__item" onClick={()=> filterItems("Design")}>Design</span>
          <span className="work__item" onClick={()=> filterItems("Branding")}>Branding</span>
        </div>

        <div className="work__container grid">
          {
            items.map((elem)=> {
              const{ id, image, title, category} = elem;
              return(
                <div className="work__card" key={id}>
                  <div className="work__tumbnail">
                    <img src={image} alt="" className="work__img" />
                    <div className="work__mask">

                    </div>
                  </div>

                  <span className="work__category">{category}</span>
                  <h3 className="work__title">{title}</h3>
                  <a href="#portfolio" className="work__button">
                    <i className="icon-link work__button-icon"></i>
                  </a>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Portfolio
