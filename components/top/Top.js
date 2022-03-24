import { Box } from "@mui/material"
import React from "react"
import Content from "./Content"
import MyNavigationBar from "./MyNavigationBar"
import Poster from "./Poster"

function Top(props) {
  return (
    <>
      <MyNavigationBar />
      <Box sx={{ display: "flex" }}>
        <Content />
        <Poster />
      </Box>
    </>
  )
}

export default Top
