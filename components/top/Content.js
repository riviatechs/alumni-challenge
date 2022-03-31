import { Box, Button } from "@mui/material"
import Image from "next/image"
import React from "react"

import Logo from "../../public/logos/Alumni_Golf_Logo.png"
import styles from "../../styles/components/Content.module.css"

function Content() {
  return (
    <div className={styles.content}>
      {/* <div>
        <Image src={Logo} width={300} height={300} alt={"Company logo"} />
      </div> */}

      <h1>
        The perfect <span className="insistText">opportunity</span> to <span className="insistText">give back</span> to the community?
      </h1>

      <Button size="large" className={styles.joinButton}>
        Join Next Challenge
      </Button>
    </div>
  )
}

export default Content
