import styles from "./Hero.module.css";
import Button from "../ul/Button";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__genre}>Genre: Action Fantasy</h3>
          <p className={styles.hero__description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta expedita accusamus perspiciatis quasi blanditiis beatae voluptatibus quisquam eveniet odio tempora?</p>
          <Button variant="secondary">Watch</Button>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image}src="https://picsum.photos/700/400" alt="" />
        </div>
      </section>
    </div>
  )
}

export default Hero;