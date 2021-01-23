import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./ServicesHomePage.css";
import Fade from "react-reveal/Fade";

function ServicesHomePage() {
  return (
    <div className="servicesHomePage">
      <div className="servicesHomePage__wrapper">
        <div className="servicesHomePage__headerWrapper">
          <div>
            <Fade top delay={500}>
              <h1>D </h1>
            </Fade>
            <Fade top delay={600}>
              <h1>a </h1>
            </Fade>
            <Fade top delay={700}>
              <h1>t </h1>
            </Fade>
            <Fade top delay={800}>
              <h1>a </h1>
            </Fade>
          </div>
          <div>
            <Fade top>
              <h1> &nbsp;&nbsp; </h1>
            </Fade>
          </div>
          <div>
            <Fade top delay={900}>
              <h1>I </h1>
            </Fade>
            <Fade top delay={1000}>
              <h1>s </h1>
            </Fade>
          </div>
          <div>
            <Fade top>
              <h1> &nbsp;&nbsp; </h1>
            </Fade>
          </div>
          <div>
            <Fade top delay={1100}>
              <h1>T </h1>
            </Fade>
            <Fade top delay={1200}>
              <h1>h </h1>
            </Fade>
            <Fade top delay={1300}>
              <h1>e </h1>
            </Fade>
          </div>
          <div>
            <Fade top>
              <h1> &nbsp;&nbsp; </h1>
            </Fade>
          </div>
          <div>
            <Fade top delay={1400}>
              <h1>F </h1>
            </Fade>
            <Fade top delay={1500}>
              <h1>o </h1>
            </Fade>
            <Fade top delay={1600}>
              <h1>u </h1>
            </Fade>
            <Fade top delay={1700}>
              <h1>n </h1>
            </Fade>
            <Fade top delay={1800}>
              <h1>d </h1>
            </Fade>
            <Fade top delay={1900}>
              <h1> a</h1>
            </Fade>
            <Fade top delay={2000}>
              <h1> t</h1>
            </Fade>
            <Fade top delay={2100}>
              <h1>i </h1>
            </Fade>
            <Fade top delay={2200}>
              <h1> o</h1>
            </Fade>
            <Fade top delay={2300}>
              <h1>n </h1>
            </Fade>
          </div>
          <div>
            <Fade top>
              <h1> &nbsp;&nbsp; </h1>
            </Fade>
          </div>
          <div>
            <Fade top delay={2400}>
              <h1>O </h1>
            </Fade>
            <Fade top delay={2500}>
              <h1> f</h1>
            </Fade>
          </div>
          <div>
            <Fade top>
              <h1> &nbsp;&nbsp; </h1>
            </Fade>
          </div>
          <div>
            <Fade top delay={2600}>
              <h1> E</h1>
            </Fade>
            <Fade top delay={2700}>
              <h1>v </h1>
            </Fade>
            <Fade top delay={2800}>
              <h1> e</h1>
            </Fade>
            <Fade top delay={2900}>
              <h1> r</h1>
            </Fade>
            <Fade top delay={3000}>
              <h1> y</h1>
            </Fade>
            <Fade top delay={3100}>
              <h1> t</h1>
            </Fade>
            <Fade top delay={3200}>
              <h1> h</h1>
            </Fade>
            <Fade top delay={3300}>
              <h1> i</h1>
            </Fade>
            <Fade top delay={3400}>
              <h1> n</h1>
            </Fade>
            <Fade top delay={3500}>
              <h1> g</h1>
            </Fade>
          </div>
        </div>
        <div className="servicesHomePage__servicesWrapper">
          <ServiceCard
            service={"Service 1"}
            description={
              "this is the description paragraph this is the description paragraph"
            }
          />
          <ServiceCard
            service={"Service 2"}
            description={
              "this is the description paragraph this is the description paragraph"
            }
          />
          <ServiceCard
            service={"Service 3"}
            description={
              "this is the description paragraph this is the description paragraph"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesHomePage;
