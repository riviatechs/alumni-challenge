import { Box, Button } from "@mui/material"
import Image from "next/image"
import React from "react"

import Logo from "../../public/logos/Alumni_Golf_Logo.png"
import styles from "../../styles/components/Content.module.css"

function Content() {
  return (
    <div className={styles.content}>
      <div>
        <Image src={Logo} width={200} height={200} alt={"Company logo"} />
      </div>

      <h1>
        We are alumni Challenge, we give you an opportunity to give back to your
        community!
      </h1>

      <Button size="large" className={styles.joinButton}>
        Join Next Challenge
      </Button>
    </div>
  )
}

export default Content
