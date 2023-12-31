import styles from "./Button.module.css";

const Button = ({ text }) => {
  return (
    <button className={styles.button}>
      <div className="text-2xl">{text}</div>
    </button>
  );
};

export default Button;
