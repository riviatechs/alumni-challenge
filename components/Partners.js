import { Typography } from "@mui/material"
import sponsors from "../public/sponsors.jpg"
import Image from "next/image"

export default function Partners(props) {
  return (
    <div>
      <Typography variant="h6">Partners</Typography>
      <Image
        src={sponsors}
        height={714}
        width={3876}
        alt="Sponsors List"
      ></Image>
    </div>
  )
}
