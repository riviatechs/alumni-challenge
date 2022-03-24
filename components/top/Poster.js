import Image from "next/image"
import styles from "../../styles/components/Poster.module.css"

import golfPoster from "../../public/pictures/golf6.jpg"

export default function Poster(props) {
  return (
    <div className={styles.poster}>
      <Image
        src={golfPoster}
        width={2400}
        height={1800}
        layout="responsive"
        alt="Alumni Challenge Poster"
      />
    </div>
  )
}
