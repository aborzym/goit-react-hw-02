import css from "./Options.module.css";

const Options = ({ updateFeedback, reset, showResetButton }) => {
  return (
    <div className={css.container}>
      <button className={css.good} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.neutral} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.bad} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {showResetButton && (
        <button className={css.reset} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
