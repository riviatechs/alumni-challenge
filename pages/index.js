import CssBaseline from "@mui/material/CssBaseline"
import MyHead from "../components/MyHead"
import Poster from "../components/Poster"
import MyNavigationBar from "../components/MyNavigationBar"
import "typeface-roboto"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import About from "../components/About"
import Partners from "../components/Partners"
import ContactUs from "../components/ContactUs"
import Mission from "../components/Mission"
import Footer from "../components/Footer"
import Organizer from "../components/Organizer"
import Previous from "../components/Previous"
import { Fragment } from "react"

export default function Home() {
  return (
    <Fragment>
      <MyHead />
      <CssBaseline />

      <div>
        <MyNavigationBar />

        <main>
          <Poster />

          <About />

          <Mission />

          <Previous />

          <Organizer />

          <Partners />

          <ContactUs />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Fragment>
  )
}
