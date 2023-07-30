import styles from "@/static/styles/button.module.scss";
const ButtonPlay = () => {
  return (
    <div
      className="gcc"
      style={{
        backgroundColor: "var(--white)",
        height: 72,
        width: 72,
        borderRadius: "50%",
        border: "1px solid var(--dark-bg)",
      }}
    >
      <div className={styles.triangle}></div>
    </div>
  );
};

export default ButtonPlay;
