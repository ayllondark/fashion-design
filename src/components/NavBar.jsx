import React, { useEffect, useRef } from "react";
import IonIcon from "@reacticons/ionicons";
import gsap from "gsap";

const NavBar = () => {

  
    //Efecto Menu
    const efectoMenu = gsap.timeline();
    

  useEffect(() => {
    
  


    efectoMenu.from('.navbar div', {duration: 0.08, y: 20, delay: 1.5, opacity: 0});

    //Efecto Social Media
    efectoMenu.from('.media ul li', {duration: 0.08, x: -20, delay: 1.5, opacity: 0});

    //Efecto Text
    efectoMenu.from('.text h1 .hideText', {duration: 0.08, y: '100%', delay: 1 });
    efectoMenu.from('.text h3 .hideText', {duration: 0.08, y: '100%', delay: 1.2 });
    efectoMenu.from('.text p .hideText', {duration: 0.08, y: '100%', delay: 1.2 });

    //Efecto Text
    efectoMenu.from('.text h2', {duration: 0.08, x: '-10000', delay: 1.5, opacity: 0});

    //Efecto Sponsor
    efectoMenu.from('.sponsor img', {duration: 0.08, y: '20', delay: 1.5, opacity: 0});
    efectoMenu.from('.sponsor p', {duration: 0.08, y: '20', delay: 1.6, opacity: 0});

    //Efecto Distorcion
    efectoMenu.from('.distortions', {duration: 0.08, y: '20', delay: 2, opacity: 0});

    //Overlay
    efectoMenu.to(".first", {duration: 0.08, top: '-100%', delay: .5 });
    efectoMenu.to(".second", {duration: 0.08, top: '-100%', delay: .7 });
    efectoMenu.to(".third", {duration: 0.08, top: '-100%', delay: .9 });

  },[]);

  return (
    <>
      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>

      <nav className="navbar">
        <div className="menu">
          <IonIcon name="reorder-three-outline"></IonIcon>
        </div>
        <div className="lang">eng</div>
        <div className="search">
        <IonIcon name="search-outline"></IonIcon>
        </div>
      </nav>

        <div className="media">
            <ul>
                <li>facebook</li>
                <li>instagram</li>
                <li>twitter</li>
            </ul>
        </div>

    </>
  );
};

export default NavBar;
