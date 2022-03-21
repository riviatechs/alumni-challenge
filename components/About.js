import { Paper, Typography } from "@mui/material"
import styles from "../styles/components/About.module.css"
import Image from "next/image"
import Golf from "../public/golf.png"
import Play from "../public/play.jpg"

const golfText = "Golf club and a flag"
const playGolf = "A man playing golf"

export default function About(props) {
  return (
    <div className={styles.about}>
      <Typography variant="h5" component="h2" className={styles.title}>
        About the Alumni Challenge
      </Typography>

      <div className={styles.body}>
        <Typography variant="body1" component="p" className={styles.content}>
          Alumni Challenge is an initiative to drive back Alumni participation
          in tangible development in their former school, college or university
          through different sports and social avenues.
        </Typography>

        <Image
          src={Golf}
          width={2000}
          height={1128}
          alt={playGolf}
          className={styles.image}
        />

        <Typography variant="body1" component="p" className={styles.content}>
          Alumni Golf Challenge is a golf Charity tournament that focuses on
          attracting corporate executives and business men and women to
          fundraise education bursaries for their former school, college or
          university institution.
        </Typography>

        <Image
          src={Play}
          width={477}
          height={465}
          alt={golfText}
          className={styles.image}
        />

        <Typography variant="body1" component="p" className={styles.content}>
          Company executives and business leaders will battle it out in the golf
          challenge and the winners walks away with Bursary fund to support
          vulnerable students in their alma mater
        </Typography>
      </div>
    </div>
  )
}
