import { Button, Container } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from '../../../../public/projectsImages/BuyPartsOnline_Logo-1-1.png'
import logo2 from '../../../../public/projectsImages/Image-3.png'
import logo3 from '../../../../public/projectsImages/Image-5.png'
import logo4 from '../../../../public/projectsImages/Picture1 (1).png'
import logo5 from '../../../../public/projectsImages/Picture2.png'

import logo7 from '../../../../public/projectsImages/Picture3.png'
import logo8 from '../../../../public/projectsImages/Picture8.png'
import logo9 from '../../../../public/projectsImages/TOM-logo-for-website-page-001.1569517520898-1-1.png'
import styles from "./ProjectsSlider.module.css";
const ProjectsSlider = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
    return (
       <div className={styles.carouselStyle}>
        <div className={styles.carouselWidth}> 
        <Carousel
      
        centerMode={true}
        swipeable={false}
        draggable={false}
        showDots={true}
        
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={ true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
>
  <div>
    <Image 
    className={styles.logo}
        src={logo1}
        width={150}
       
    />
    
   </div>
   <div>
    <Image 
        className={styles.logo}
        src={logo2}
        width={150}
       
    />
    
   </div>
   <div>
    <Image 
        className={styles.logo}
        src={logo3}
        width={150}
       
    />
    
   </div>
   <div>
    <Image 
        className={styles.logo}
        src={logo4}
        width={150}
        
    />
    
   </div>
   <div>
    <Image 
       className={styles.logo}
        src={logo5}
        width={150}
    
    />
    
   </div>
  
   <div>
    <Image 
        className={styles.logo}
        src={logo7}
        width={150}
        
    />
    
   </div>
   <div>
    <Image 
        className={styles.logo}
        src={logo8}
        width={150}
       
    />
    
   </div>
   <div>
    <Image 
        className={styles.logo}
        src={logo9}
        width={150}
        
    />
    
   </div>
  
</Carousel>
<Button size="large" className={styles.carouselButton} variant="contained" color="primary">
  View All
</Button>
</div>
       </div>
    );
};

export default ProjectsSlider;