import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "../public/logo.png"
import AppBar from "@mui/material/AppBar"
import styles from "../styles/components/MyNavigationBar.module.css"
import PropTypes from "prop-types"
import useScrollTrigger from "@mui/material/useScrollTrigger"

export default function MyNavigationBar(props) {
  return (
    <nav className={styles.nav}>
      <ElevationScroll {...props}>
        <AppBar className={styles.appBar}>
          <Image src={Logo} width={40} height={40} alt={"Company logo"} />

          <div>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </div>

          <div>
            <Link href={"/organizers"}>
              <a>Organizers</a>
            </Link>
          </div>

          <div>
            <Link href={"/partners"}>
              <a>Partners</a>
            </Link>
          </div>

          <div>
            <Link href={"/contact-us"}>
              <a>Contact Us</a>
            </Link>
          </div>
        </AppBar>
      </ElevationScroll>
    </nav>
  )
}

function ElevationScroll(props) {
  const { children } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
}
