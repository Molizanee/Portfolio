import styles from "./Cards.module.css";

const Cards = ({ text }) => {
  return (
    <div className={styles.box}>
      <div className="p-7">
        <p className="text-second-blue text-2xl">{text}</p>
      </div>
    </div>
  );
};

export default Cards;
