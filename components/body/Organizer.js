import * as React from "react"
import Image from "next/image"

// material components
import { Typography } from "@mui/material"

import edgeIsle from "../../public/pictures/mark/ALUMNI GOLF CHALLANGE 2022-146.jpg"

// imported css
import styles from "../../styles/components/Organizer.module.css"

export default function Organizer(props) {
  return (
    <div className={styles.Organizer}>
      <h1>Team</h1>

      <div className={styles.body}>
        <div className={styles.image}>
          <Image
            src={edgeIsle}
            width={2000}
            height={3000}
            alt="EdgeIsle Team"
          />
        </div>

        <div className={styles.organizerContent}>
          <h2>Founder</h2>
          Edgeisle is a marketing agency
        </div>
      </div>
    </div>
  )
}
