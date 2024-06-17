// components/Timeline.tsx
import Image from "next/image";
import styles from "./Timeline.module.scss";
import cake from "../../../public/images/cake.jpeg";
import konaktar from "../../../public/images/konaktar.jpeg";
import bet from "../../../public/images/bet.jpeg";
import fur from "../../../public/images/fur.jpeg";
import konak from "../../../public/images/konak.jpeg";
import kel from "../../../public/images/kel.jpeg";
import AOS from "aos";

export default function ToiBagdarlamasi() {
  return (
    <div className={styles.timeline}>
      <div className={`${styles.title} text-3xl color `}>ТОЙ БАҒДАРЛАМАСЫ</div>

      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <Image
            src={konaktar}
            data-aos="fade-right"
            alt="Фуршет, фотосессия"
            width={300}
            height={200}
          />
          <h2 data-aos="fade-right" className="flex text-center ">
            16:00 <br /> ҚОНАҚТАР ЖИНАЛУЫ
          </h2>
        </div>
      </div>

      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <Image
            src={fur}
            data-aos="fade-left"
            alt="Беташар"
            width={300}
            height={200}
          />
          <h2 data-aos="fade-left" className="mt-2 text-center ">
            16:20 <br />
            ФУРШЕТ
          </h2>
        </div>
      </div>

      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <Image
            src={konak}
            data-aos="fade-right"
            alt="Фуршет, фотосессия"
            width={300}
            height={200}
          />
          <h2 data-aos="fade-right" className="flex text-center   ">
            16:50 <br /> ҚҰДАЛАРДЫ <br /> ҚАРСЫ <br /> АЛУ
          </h2>
        </div>
      </div>

      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <Image
            src={kel}
            data-aos="fade-left"
            alt="Кұдаларды қарсы алу"
            width={300}
            height={200}
          />
          <h2 data-aos="fade-left" className="flex text-center ">
            17:00 ТОЙДЫҢ АШЫЛУЫ
          </h2>
        </div>
      </div>
    </div>
  );
}
