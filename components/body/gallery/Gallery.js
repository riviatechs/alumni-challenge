import React from "react"
import Image from "next/image"

// mui imports
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"

// css import
import styles from "./Gallery.module.css"

export default function Gallery(props) {
  return (
    <>
      <div className={styles.galleryWrapper}>
        <h1>Gallery</h1>
        <div>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemImages.map((item) => (
              <ImageListItem key={item.img}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  )
}

export const itemImages = [
  {
    src: "/pictures/playing/player1.jpg",
    width: 2000,
    height: 3000,
    alt: "player 1",
  },
  {
    src: "/pictures/playing/player2.jpg",
    width: 3000,
    height: 2000,
    alt: "player 2",
  },
  {
    src: "/pictures/playing/player3.jpg",
    width: 3000,
    height: 2000,
    alt: "player 3",
  },
  {
    src: "/pictures/playing/player4.jpg",
    width: 3000,
    height: 2000,
    alt: "player 4",
  },
  {
    src: "/pictures/playing/player5.jpg",
    width: 2000,
    height: 3000,
    alt: "player 5",
  },
  {
    src: "/pictures/playing/player6.jpg",
    width: 2000,
    height: 3000,
    alt: "player 6",
  },
  {
    src: "/pictures/playing/player7.jpg",
    width: 3000,
    height: 2000,
    alt: "player 7",
  },
  {
    src: "/pictures/playing/player8.jpg",
    width: 2000,
    height: 3000,
    alt: "player 8",
  },
  {
    src: "/pictures/playing/player9.jpg",
    width: 2000,
    height: 3000,
    alt: "player 9",
  },
  {
    src: "/pictures/playing/player10.jpg",
    width: 3000,
    height: 2000,
    alt: "player 10",
  },
]
