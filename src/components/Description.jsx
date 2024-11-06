import css from "./Description.module.css";
const Description = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Shit Happens Café</h1>
      <p className={css.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
