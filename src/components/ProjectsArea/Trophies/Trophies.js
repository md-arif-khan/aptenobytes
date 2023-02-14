
import { Grid, Typography } from '@mui/material';
import styles from './Trophies.module.scss'
import { Button } from '@mui/material';
import Image from 'next/image';
import cloudImage from '../../../../public/projectsImages/projectCloud1.png'
import groupImage from '../../../../public/projectsImages/Group-78471.svg'
const Trophies = () => {
    return (
<Grid className={styles.parentDiv} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={12} sm={12} md={6}  className={styles.leftSide} >
        <div className={styles.contentBox}>
            <Typography variant='h5' className={styles.smallTitle}>
               TROPHIES
            </Typography>
            <Typography variant='h1' className={styles.bigTitle}>
               List Of We Earned
            </Typography>
            <Typography variant='h6'color="inherit" className={styles.content}>
            Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Bibendum enim facilisis gravida neque convallis. Tincidunt tortor aliquam nulla facilisi.
            </Typography>
            <Button className={styles.button} variant="contained">Contained</Button>
        </div>
        <Image
        className={styles.cloudImage}  
         src={cloudImage}
        />
    </Grid>
    <Grid item xs={12} sm={12} md={6} className={styles.rightSide}>
       <div className={styles.box}>
         
       </div>
       <Image 
       className={styles.gropuImage}
        src={groupImage}
       />
    </Grid>
</Grid>
    );
};

export default Trophies;