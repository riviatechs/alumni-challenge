import { Typography } from "@mui/material"
import styles from "../styles/components/Organizer.module.css"
import Image from "next/image"
import edgeIsle from "../public/winners1.png"

export default function Organizer(props) {
  return (
    <div className={styles.Organizer}>
      <Typography component="h2" className={styles.title}>
        Edgeisle
      </Typography>

      <div className={styles.content}>
        <Image
          src={edgeIsle}
          width={540}
          height={364}
          alt="EdgeIsle Team"
          className={styles.image}
        />
        <Typography variant="body1" component="p" className={styles.body}>
          Edgeisle is a marketing agency
        </Typography>
      </div>
    </div>
  )
}
