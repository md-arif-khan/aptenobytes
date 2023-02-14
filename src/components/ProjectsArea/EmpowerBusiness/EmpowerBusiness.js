
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import styles from './EmpowerBusiness.module.scss'
import groupImage from '../../../../public/projectsImages/Group-8007 (4).svg'
import { Button } from '@mui/material';
const EmpowerBusiness = () => {
    return (
 <div className={styles.mainDiv}>
    <div className={styles.grandParentDiv}>
    <Grid className={styles.parentDiv} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={5}>
        <Image 
        className={styles.groupImage}
         src={groupImage}
        />
        </Grid>
        <Grid item xs={12} sm={12} md={7} className={styles.rightSide}>
            <div className={styles.contentBox}>
                <Typography  variant='h6' className={styles.smallTitle}>
                   EMPOWER YOUR BUSINESS
                </Typography>
                <Typography variant='h2' className={styles.bigTitle}>
                   We’re Happy When They’re Happy
                </Typography>
                <Button className={styles.button} variant="contained">Contained</Button>
            </div>
        </Grid>
     
</Grid>
</div>
</div>
    );
};

export default EmpowerBusiness;