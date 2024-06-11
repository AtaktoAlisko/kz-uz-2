// Musik.js
import styles from "./Musik.module.scss";
import Image from "next/image";

export default function Musik({ isPlaying, play }) {
  return (
    <button
      className={`${styles.muzik} ${isPlaying ? "animate-spin" : ""}`}
      onClick={play}
    >
      <Image
        className="ml-20"
        height={50}
        width={100}
        src="/images/proigriv.png"
        alt="musik"
      />
    </button>
  );
}
