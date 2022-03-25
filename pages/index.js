import CssBaseline from "@mui/material/CssBaseline"

import MyHead from "../components/top/MyHead"
import About from "../components/body/About"
import Footer from "../components/footer/Footer"
import { Fragment } from "react"

import Top from "../components/top/Top"

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
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  )
}
