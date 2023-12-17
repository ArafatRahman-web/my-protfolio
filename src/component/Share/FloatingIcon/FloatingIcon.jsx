import styles from "./floating.module.css";

const FloatingIcon = ({ img, style }) => {
  return (
    <div className={styles.floating}>
      <img className={style} src={img} alt="" />
    </div>
  );
};

export default FloatingIcon;
