import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import styles from "../../styles/components/Poster.module.css"

import golfPoster1 from "../../public/pictures/golf6.jpg"
import golfPoster2 from "../../public/pictures/golf4.jpg"
import golfPoster3 from "../../public/pictures/golf9.jpg"
import golfPoster4 from "../../public/pictures/golf7.jpg"
import golfPoster5 from "../../public/pictures/golf5.jpg"

export default function Poster() {
  return (
    <div className={styles.poster}>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <Image
            src={golfPoster1}
            width={2400}
            height={1800}
            className={styles.posterImage}
            alt="Alumni Challenge Poster 1"
          />
        </div>
        <div>
          <Image
            src={golfPoster2}
            width={2400}
            height={1800}
            className={styles.posterImage}
            alt="Alumni Challenge Poster 2"
          />
        </div>
        <div>
          <Image
            src={golfPoster3}
            width={2400}
            height={1800}
            className={styles.posterImage}
            alt="Alumni Challenge Poster 3"
          />
        </div>
        <div>
          <Image
            src={golfPoster4}
            width={2400}
            height={1800}
            className={styles.posterImage}
            alt="Alumni Challenge Poster 4"
          />
        </div>
        <div>
          <Image
            src={golfPoster5}
            width={2400}
            height={1800}
            className={styles.posterImage}
            alt="Alumni Challenge Poster 5"
          />
        </div>
      </Carousel>
    </div>
  )
}
