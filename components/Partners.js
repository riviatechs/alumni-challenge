import { Typography } from "@mui/material"
import sponsors from "../public/sponsors.jpg"
import Image from "next/image"
import styles from "../styles/components/Partners.module.css"

export default function Partners(props) {
  return (
    <div className={styles.partners}>
      <Typography variant="h6" className={styles.title} component="h2">
        Sponsors
      </Typography>
      <Image
        className={styles.sponsorsPoster}
        src={sponsors}
        height={714}
        width={3876}
        alt="Sponsors List"
      ></Image>
    </div>
  )
}
