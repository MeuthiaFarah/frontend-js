import styles from "./Alert.module.css";

function Alert(props) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <span>{ children }</span>
    </div>
  )
}

export default Alert;