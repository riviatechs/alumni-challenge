import Image from "next/image"

// imported components
import Organizer from "./Organizer"

// imported css
import styles from "../../styles/components/About.module.css"

// imported images
import Golf from "../../public/about/about1.jpg"
import missionImage from "../../public/about/mission.png"
import visionImage from "../../public/about/vision.png"
import Play from "../../public/about/about2.jpg"

// Text conent to variables
const golfText = "Golf club and a flag"
const playGolf = "A man playing golf"

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About the Alumni Challenge</h1>

      <div className={styles.visionMission}>
        <div className={styles.mission}>
          <div className={styles.missionContentWrapper}>
            <h1>Mission</h1>
            <div className={styles.missionContent}>
              <p>
                Networking opportunities among corporates that ride on Alumni
                associations
              </p>

              <p>
                Encourage Outreach programmes targeting learners through sports
                and other CSR efforts.
              </p>
            </div>
          </div>

          <div className={styles.missionImage}>
            <Image
              src={missionImage}
              width={314}
              height={361}
              alt="mission image"
            />
          </div>
        </div>
        <div className={styles.vision}>
          <div className={styles.visionImage}>
            <Image
              src={visionImage}
              width={508}
              height={411}
              alt="mission image"
            />
          </div>
          <div className={styles.visionContentWrapper}>
            <h1>Vision</h1>
            <div className={styles.visionContent}>
              <p>
                Network and give back to the community in big ways by use of
                competitive sporting activities
              </p>

              <p>
                Build a robust Alumni group that will advance institution
                development
              </p>
            </div>
          </div>
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
            <Image src={Golf} width={3000} height={2000} alt={playGolf} />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.image}>
            <Image src={Play} width={3000} height={2000} alt={golfText} />
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
