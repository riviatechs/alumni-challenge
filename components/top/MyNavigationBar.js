import * as React from "react"
import Link from "next/link"

import MenuIcon from "@mui/icons-material/Menu"

import styles from "../../styles/components/MyNavigationBar.module.css"
import { Button } from "@mui/material"

export default function MyNavigationBar(props) {
  return (
    <div className={styles.appBar}>
      <div className={styles.navLinks}>
        <Link href={"/#organizers"} passHref>
          <div className={styles.navLink}>
            <a>Organizers</a>
          </div>
        </Link>

        <Link href={"/programs"} passHref>
          <div className={styles.navLink}>
            <a>Programs</a>
          </div>
        </Link>

        <Link href={"/news"} passHref>
          <div className={styles.navLink}>
            <a>News</a>
          </div>
        </Link>

        <Link href={"/gallery"} passHref>
          <div className={styles.navLink}>
            <a>Gallery</a>
          </div>
        </Link>

        <Link href={"/about"} passHref>
          <div className={styles.navLink}>
            <a>About</a>
          </div>
        </Link>

        <Button className={styles.contactButton}>contact</Button>
      </div>

      <div className={styles.bars}>
        <MenuIcon />
      </div>
    </div>
  )
}
