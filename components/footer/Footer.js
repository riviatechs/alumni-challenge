import Link from "next/link"
import Image from "next/image"

// icon imports
import FacebookIcon from "@mui/icons-material/Facebook"
import YouTubeIcon from "@mui/icons-material/YouTube"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import { Divider, Paper, Typography } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"

// css imports
import styles from "../../styles/components/Footer.module.css"

// image imports
import Logo from "../../public/logos/Alumni_Golf_Logo.png"

// link variables
const riviaTechLink = "https://riviatechs.com"
const facebookLink = "https://facebook.com"
const youtubeLink = "https://youtube.com"
const instagramLink = "https://instagram.com"
const twitterLink = "https://twitter.com"
const linkedInLink = "https://linkedin.com"
const mailToLink = "mailto:info@edgeisle.co.ke"

export default function Footer(props) {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h2>Page Content</h2>
            <div>
              <div>About</div>
              <div>Gallery</div>
              <div>Upcoming Challenges</div>
            </div>
            <div className={styles.socialMediaLinks}>
              <Link href={facebookLink} passHref>
                <FacebookIcon></FacebookIcon>
              </Link>

              <Link href={youtubeLink} passHref>
                <YouTubeIcon></YouTubeIcon>
              </Link>

              <Link href={instagramLink} passHref>
                <InstagramIcon></InstagramIcon>
              </Link>
            </div>
          </div>

          <div className={styles.middle}>
            <div className={styles.logo}>
              <div>
                <Image
                  src={Logo}
                  width={250}
                  height={250}
                  alt={"Company logo"}
                />
              </div>
              <h2>ALUMNI GOLF CHALLENGE</h2>
            </div>
            <div>
              We give you the opportunity to give back to the community while
              enjoying yourself
            </div>
          </div>

          <div className={styles.right}>
            <h2>Address</h2>
            <div>
              <div>Location</div>
              <div>Email</div>
              <div>Number</div>
            </div>

            <div className={styles.socialMediaLinks}>
              <Link href={twitterLink} passHref>
                <TwitterIcon></TwitterIcon>
              </Link>

              <Link href={linkedInLink} passHref>
                <LinkedInIcon></LinkedInIcon>
              </Link>

              <Link href={mailToLink} passHref>
                <EmailIcon />
              </Link>
            </div>
          </div>
        </div>

        <Divider />

        <div className={styles.riviaTech}>
          Made with <FavoriteIcon color="success" /> by
          <Link href={riviaTechLink}>
            <a> Rivia Tech</a>
          </Link>
        </div>
      </div>
    </>
  )
}
