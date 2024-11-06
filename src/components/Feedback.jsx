const Feedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const percentage = Math.round(((good + neutral) / total) * 100);
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {percentage}%</p>
    </>
  );
};

export default Feedback;
