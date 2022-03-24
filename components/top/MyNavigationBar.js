import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Toolbar from "@mui/material/Toolbar"
import { Typography } from "@mui/material"
import PropTypes from "prop-types"

import styles from "../../styles/components/MyNavigationBar.module.css"

export default function MyNavigationBar(props) {
  return (
    <>
      <div className={styles.appBar}>
        <div className={styles.navLinks}>
          <Link href={"/#organizers"} passHref>
            <div className={styles.navLink}>
              <a>Organizers</a>
            </div>
          </Link>

          <Link href={"/#partners"} passHref>
            <div className={styles.navLink}>
              <a>Partners</a>
            </div>
          </Link>

          <Link href={"/#partners"} passHref>
            <div className={styles.navLink}>
              <a>About</a>
            </div>
          </Link>

          <Link href={"/#contact-us"} passHref>
            <div className={styles.navLink}>
              <a>Join</a>
            </div>
          </Link>
        </div>

        <div className={styles.bars}>
          <MenuIcon />
        </div>
      </div>
    </>
  )
}

// function ElevationScroll(props) {
//   const { children } = props
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   })

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   })
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
// }
