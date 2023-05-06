import styles from './AboutUs.module.scss';
import {Hero, WhatSetsUsApart, WhyDreamyFarm} from './Hero.js';

function AboutUs() {
  return (
    <>
     <Hero 
      cName="hero"
      heroImg={require('../../assets/img/AboutUs.jpg')}
     />
     <WhyDreamyFarm />
     <WhatSetsUsApart />
    </>
  );
}
export default AboutUs;
