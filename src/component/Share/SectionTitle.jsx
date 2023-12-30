const SectionTitle = ({ title, styles }) => {
  return (
    <h2
      className={`${
        styles ? styles : ""
      } md:text-5xl text-xl   font-extrabold text-center relative`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
