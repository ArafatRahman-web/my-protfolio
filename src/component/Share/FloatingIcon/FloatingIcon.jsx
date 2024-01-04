import styles from "./floating.module.css";

const FloatingIcon = ({ react, img, style }) => {
  console.log(img);
  return (
    <div className={react ? "" : styles.floating}>
      <img className={style} src={img} alt="" />
    </div>
  );
};

export default FloatingIcon;
