import { Typography } from "@mui/material"
import Image from "next/image"
import childBooks from "../public/child-books.png"
import styles from "../styles/components/Mission.module.css"

const childHoldBooks = "Child holding a stack of books"

export default function Mission(props) {
  return (
    <div className={styles.Mission}>
      <Typography variant="h5" component="h2" className={styles.title}>
        Mission
      </Typography>

      <Image
        src={childBooks}
        height={1024}
        width={790}
        alt={childHoldBooks}
        className={styles.image}
      />
      <div className={styles.body}>
        <Typography variant="body1" component="p" className={styles.content}>
          Encourage tangible impact on alma mater through bursary support
        </Typography>

        <Typography variant="body1" component="p" className={styles.content}>
          Encourage Outreach programmes targeting learners through sports and
          other CSR efforts
        </Typography>

        <Typography variant="body1" component="p" className={styles.content}>
          Networking opportunities among corporates that ride on Alumni
          associations
        </Typography>
      </div>
    </div>
  )
}
