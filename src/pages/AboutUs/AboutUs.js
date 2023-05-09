import { Hero } from './Hero.js';
import jpgImages from '~/assets/images/jpgs';

function AboutUs() {
  return (
    <div>
      <Hero cName="hero" heroImg={jpgImages.aboutUs} />
    </div>
  );
}
export default AboutUs;
