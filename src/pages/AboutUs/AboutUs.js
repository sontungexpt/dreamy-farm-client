import styles from './AboutUs.module.scss';
import {Hero} from './Hero.js';

function AboutUs() {
  return <div> 
    <Hero 
      cName="hero"
      heroImg={require('../../assets/img/AboutUs.jpg')}
    />
 </div>
}
export default AboutUs;
