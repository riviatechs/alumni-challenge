import Image from "next/image"
import React from "react"

function PageNotFound(props) {
  return (
    <div>
      <Image
        src="/notFoundImage.png"
        width={600}
        height={600}
        alt="not fount image"
      />
    </div>
  )
}

export default PageNotFound
