const SectionTitle = ({ title, styles }) => {
  return (
    <h2
      className={`${
        styles ? styles : ""
      } text-5xl font-extrabold text-center relative`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
