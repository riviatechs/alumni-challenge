import * as React from "react"
import Link from "next/link"

import MenuIcon from "@mui/icons-material/Menu"

import styles from "../../styles/components/MyNavigationBar.module.css"

export default function MyNavigationBar(props) {
  return (
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
            <a>Contact</a>
          </div>
        </Link>
      </div>

      <div className={styles.bars}>
        <MenuIcon />
      </div>
    </div>
  )
}
