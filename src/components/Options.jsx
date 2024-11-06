const Options = ({ updateFeedback, reset, showResetButton }) => {
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>{" "}
      {showResetButton && <button onClick={reset}>Reset</button>}
    </>
  );
};

export default Options;
