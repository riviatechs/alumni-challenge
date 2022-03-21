import { Paper, Typography } from "@mui/material"
import styles from "../styles/components/About.module.css"

export default function About(props) {
  return (
    <div className={styles.about}>
      <Paper elevation={0}>
        <Typography variant="h5" component="h2" className={styles.title}>
          About the Alumni Challenge
        </Typography>

        <Typography variant="body1" component="p" className={styles.body}>
          Alumni Challenge is an initiative to drive back Alumni participation
          in tangible development in their former school, college or university
          through different sports and social avenues.
        </Typography>

        <Typography variant="body1" component="p">
          Alumni Golf Challenge is a golf Charity tournament that focuses on
          attracting corporate executives and business men and women to
          fundraise education bursaries for their former school, college or
          university institution.
        </Typography>

        <Typography variant="body1" component="p">
          Company executives and business leaders will battle it out in the golf
          challenge and the winners walks away with Bursary fund to support
          vulnerable students in their alma mater
        </Typography>
      </Paper>
    </div>
  )
}
