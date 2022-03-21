import golfPoster from "../public/golf-poster.jpg"
import Image from "next/image"

export default function Poster(props) {
  return (
    <div>
      <Image
        src={golfPoster}
        height={1170}
        width={830}
        alt="Alumni Challenge Poster"
      />
    </div>
  )
}
