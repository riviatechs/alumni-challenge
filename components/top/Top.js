import { Box } from "@mui/material"
import React from "react"
import Content from "./Content"
import MyNavigationBar from "./MyNavigationBar"
import Poster from "./Poster"

import styles from "../../styles/components/Top.module.css"

function Top(props) {
  return (
    <div className={styles.top}>
      <MyNavigationBar />
      <Box sx={{ display: "flex" }}>
        <Content />
        <Poster />
      </Box>
    </div>
  )
}

export default Top
