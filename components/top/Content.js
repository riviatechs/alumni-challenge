import { Box } from "@mui/material"
import Image from "next/image"
import React from "react"

import Logo from "../../public/logos/Alumni_Golf_Logo.png"

function Content() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Image src={Logo} width={200} height={200} alt={"Company logo"} />
        </div>

        <h1>
          We are alumni Challenge, we give you an opportunity to care for your
          community!
        </h1>
      </Box>
    </>
  )
}

export default Content
