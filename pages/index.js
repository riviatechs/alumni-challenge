import Image from "next/image"
import styles from "../styles/Home.module.css"
import CssBaseline from "@mui/material/CssBaseline"
import MyHead from "../components/MyHead"
import Poster from "../components/Poster"
import MyNavigationBar from "../components/MyNavigationBar"
import "typeface-roboto"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

export default function Home() {
  return (
    <div>
      <CssBaseline />

      <div className={styles.container}>
        <MyHead />

        <MyNavigationBar />

        <main></main>

        <Poster />

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  )
}
