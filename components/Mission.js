import { Typography } from "@mui/material"
import Image from "next/image"
import childBooks from "../public/child-books.png"

export default function Mission(props) {
  return (
    <div>
      <Typography variant="h6">Mission</Typography>
      <Image
        src={childBooks}
        height={1024}
        width={790}
        alt="Child with books"
      />
      <Typography variant="body1" component="p">
        Encourage tangible impact on alma mater through bursary support
      </Typography>

      <Typography variant="body1" component="p">
        Encourage Outreach programmes targeting learners through sports and
        other CSR efforts
      </Typography>

      <Typography variant="body1" component="p">
        Networking opportunities among corporates that ride on Alumni
        associations
      </Typography>
    </div>
  )
}
