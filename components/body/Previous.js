import { Typography } from "@mui/material"
import Youtube from "./Youtube"
import styles from "../styles/components/Previous.module.css"

export default function Previous(props) {
  return (
    <div className={styles.previous}>
      <Typography variant="h6" component="h2" className={styles.title}>
        Previous Events
      </Typography>

      <Youtube />
    </div>
  )
}
