import golfPoster from "../public/golf-poster.jpg"
import Image from "next/image"
import styles from "../styles/components/Poster.module.css"

export default function Poster(props) {
  return (
    <div className={styles.poster}>
      <Image
        src={golfPoster}
        height={400}
        width={400}
        layout={"responsive"}
        alt="Alumni Challenge Poster"
      />
    </div>
  )
}
