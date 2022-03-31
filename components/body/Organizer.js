import * as React from "react"
import Image from "next/image"

// material components
import { Typography } from "@mui/material"

import edgeIsle from "../../public/winners1.png"

// imported css
import styles from "../../styles/components/Organizer.module.css"

export default function Organizer(props) {
  return (
    <div className={styles.Organizer}>
      <h1>Team</h1>

      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={edgeIsle} width={541} height={364} alt="EdgeIsle Team" />
        </div>

        <Typography variant="body1" component="p" className={styles.body}>
          Edgeisle is a marketing agency
        </Typography>
      </div>
    </div>
  )
}
