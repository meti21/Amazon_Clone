import { Carousel } from 'react-responsive-carousel'
import { CarouselImages } from "./resource/data";

import styles from "./CarouselEffect.module.css";

//css for react-responsive-carousel from npm documentation "usage" section
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true} // Automatically starts playing the carousel on load
        infiniteLoop={true} // Allows the carousel to loop back to the first slide after the last one
        showIndicators={false} // Hides the small navigation dots usually shown at the bottom
        showThumbs={false} // Hides the thumbnail previews below the carousel
      >
        {CarouselImages?.map((currentImageLink, i) => {
          return <img key={i} src={currentImageLink} alt="img" />;
        })}
      </Carousel>

      {/*fade at the bottom of the banner images  */}
      <div className={styles.hero__img}></div>
    </div>
  );
}

export default CarouselEffect