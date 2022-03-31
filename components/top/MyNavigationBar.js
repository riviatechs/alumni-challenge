import * as React from "react"
import Link from "next/link"
import Image from "next/image"

// material imports
import { Button, Divider } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

// image imports
import Logo from "../../public/logos/Alumni_Golf_Logo.png"

// css
import styles from "../../styles/components/MyNavigationBar.module.css"

export default function MyNavigationBar(props) {
  return (
    <div className={styles.appBar}>
      <div className={styles.logo}>
        <div>
        <Image src={Logo} width={250} height={250} alt={"Company logo"} />
      </div>
        ALUMNI GOLF CHALLENGE
      </div>

      <div className={styles.links}>
        <div className={styles.navLinks}>
            <div className={styles.navLinkAbout}>
              about
              <div className={styles.aboutLinks}>
            <ul>
              <li>Mission</li>
              <Divider sx={{background: "white"}} />
              <li>Vision</li>
              <Divider sx={{background: "white"}} />
              <li>Organizers</li>
              <Divider sx={{background: "white"}} />
              <li>Partners</li>
            </ul>
          </div>
            </div>

          <Link href={"/#gallery"} passHref>
            <div className={styles.navLink}>
              <a>Gallery</a>
            </div>
          </Link>

          <Link href={"#/programs"} passHref>
            <div className={styles.navLink}>
              <a>upcoming</a>
            </div>
          </Link>

        </div>

        <div className={styles.buttons}>
          <Button variant="outlined" color="success"  className={styles.contactButton}>contact</Button>
          <Button className={styles.joinButton}>join</Button>
        </div>
      </div>

      

      <div className={styles.bars}>
        <MenuIcon />
      </div>
    </div>
  )
}
