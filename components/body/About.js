import Image from "next/image"
import { Paper, Typography } from "@mui/material"

import styles from "../../styles/components/About.module.css"
import Golf from "../../public/golf.png"
import missionImage from "../../public/about/mission.png"
import visionImage from "../../public/about/vision.png"
import Play from "../../public/play.jpg"

const golfText = "Golf club and a flag"
const playGolf = "A man playing golf"

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About the Alumni Challenge</h1>

      <div className={styles.visionMission}>
        <div className={styles.mission}>
          <div>
            <Image
              src={missionImage}
              width={620}
              height={403}
              alt="mission image"
            />
          </div>
          <h1>Mission</h1>
          <div>content</div>
        </div>
        <div className={styles.vision}>
          <div>
            <Image
              src={visionImage}
              width={522}
              height={478}
              alt="mission image"
            />
          </div>
          <h1>Vision</h1>
          <div>content</div>
        </div>
      </div>

      <div className={styles.body}>
        <section className={styles.section}>
          <p className={styles.content}>
            Alumni Challenge is an initiative to drive back Alumni participation
            in tangible development in their former school, college or
            university through different sports and social avenues.
          </p>
          <div className={styles.image}>
            <Image src={Golf} width={477} height={465} alt={playGolf} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.image}>
            <Image src={Play} width={477} height={465} alt={golfText} />
          </div>

          <p className={styles.content}>
            Alumni Golf Challenge is a golf Charity tournament that focuses on
            attracting corporate executives and business men and women to
            fundraise education bursaries for their former school, college or
            university institution.
          </p>
        </section>

        {/* <p className={styles.content}>
          Company executives and business leaders will battle it out in the golf
          challenge and the winners walks away with Bursary fund to support
          vulnerable students in their alma mater
        </p> */}
      </div>
    </div>
  )
}
