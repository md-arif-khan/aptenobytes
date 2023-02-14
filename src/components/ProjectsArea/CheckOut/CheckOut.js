import React from 'react';
import { Typography } from '@mui/material';
import styles from "./CheckOut.module.css";
import Image from 'next/image';
import cloudImage1 from '../../../../public/projectsImages/projectCloud1.png'
import cloudImage2 from '../../../../public/projectsImages/projectCloud2.png'
const CheckOut = () => {
    return (
      <div className={styles.parentStyle}>
           <div>
              <Typography className={styles.projectSmallTitle} variant="h6" component="h6">
                 PROJECTS
              </Typography>;
              <Typography className={styles.projectTitle} variant="h2" component="h1">
                  Check Out Our Fantastic Projects
              </Typography>;
              <Typography className={styles.description} variant="h5" component="h5">
                 Non tellus orci ac auctor augue mauris augue. Ornare arcu dui vivamus arcu. At volutpat diam ut venenatis tellus in metus
              </Typography>;
           </div>
           <Image
             src={cloudImage1}
             className={styles.cloudImage1Style}
           />
           
           <Image
             src={cloudImage2}
             className={styles.cloudImage2Style}
           />

          
      </div>
    );
};

export default CheckOut;