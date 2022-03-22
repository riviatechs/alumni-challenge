import { Typography } from "@mui/material"
import styles from "../styles/components/ContactUs.module.css"

export default function ContactUs(props) {
  return (
    <div className={styles.ContactUs}>
      <Typography variant="h6" component="h2" className={styles.title}>
        Contact Us
      </Typography>
    </div>
  )
}
