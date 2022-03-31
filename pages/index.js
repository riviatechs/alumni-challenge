import CssBaseline from "@mui/material/CssBaseline"

import MyHead from "../components/top/MyHead"
import About from "../components/body/About"
import Footer from "../components/footer/Footer"
import { Fragment } from "react"

import Top from "../components/top/Top"
import Gallery from "../components/body/gallery/Gallery"
import Organizer from "../components/body/Organizer"
import Partners from "../components/body/Partners"

export default function Home() {
  return (
    <Fragment>
      <MyHead />
      <CssBaseline />

      <nav>
        <Top />
      </nav>

      <main>
        <About />
        <Gallery />
        <Organizer />
        <Partners />
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  )
}
