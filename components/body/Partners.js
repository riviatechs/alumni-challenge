import { Typography } from "@mui/material"
import sponsors from "../../public/sponsors.jpg"
import Image from "next/image"
import styles from "../../styles/components/Partners.module.css"

export default function Partners(props) {
  return (
    <div className={styles.partners}>
      <Image
        className={styles.sponsorsPoster}
        src={sponsors}
        height={714}
        width={3490}
        alt="Sponsors List"
      />
    </div>
  )
}
