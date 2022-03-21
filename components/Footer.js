import FacebookIcon from "@mui/icons-material/Facebook"
import Link from "next/link"
import YouTubeIcon from "@mui/icons-material/YouTube"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import styles from "../styles/components/Footer.module.css"
import { Paper, Typography } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"

const riviaTechLink = "https://riviatechs.com"
const facebookLink = "https://facebook.com"
const youtubeLink = "https://youtube.com"
const instagramLink = "https://instagram.com"
const twitterLink = "https://twitter.com"
const linkedInLink = "https://linkedin.com"
const mailToLink = "mailto:info@edgeisle.co.ke"

export default function Footer(props) {
  return (
    <Paper elevation={0}>
      <div className={styles.footer}>
        <div className={styles.socialMedia}>
          <Link href={facebookLink} passHref>
            <FacebookIcon></FacebookIcon>
          </Link>

          <Link href={youtubeLink} passHref>
            <YouTubeIcon></YouTubeIcon>
          </Link>

          <Link href={instagramLink} passHref>
            <InstagramIcon></InstagramIcon>
          </Link>

          <Link href={twitterLink} passHref>
            <TwitterIcon></TwitterIcon>
          </Link>

          <Link href={linkedInLink} passHref>
            <LinkedInIcon></LinkedInIcon>
          </Link>

          <Link href={mailToLink} passHref>
            <EmailIcon></EmailIcon>
          </Link>
        </div>

        <div className={styles.riviaTech}>
          <Typography variant="h5" component="h2">
            Made with <FavoriteIcon /> by
            <Link href={riviaTechLink}>
              <a> Rivia Tech</a>
            </Link>
          </Typography>
        </div>
      </div>
    </Paper>
  )
}
