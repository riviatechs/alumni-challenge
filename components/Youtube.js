import styles from "../styles/components/Youtube.module.css"
export default function Youtube(props) {
  return (
    <div className={styles.videoResponsive}>
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/MjBHc4CxeEo"
        frameBorder={"0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Previous Event"
      />
    </div>
  )
}
