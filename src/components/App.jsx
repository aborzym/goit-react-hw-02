import { useState, useEffect } from "react";
import "./App.css";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

function App() {
  const ratesObject = { good: 0, neutral: 0, bad: 0 };

  const getRates = () => {
    const savedRates = window.localStorage.getItem("cafe-rates");
    return savedRates ? JSON.parse(savedRates) : ratesObject;
  };

  const [rates, setRates] = useState(getRates);

  const updateFeedback = (val) => {
    setRates({
      ...rates,
      [val]: rates[val] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("cafe-rates", JSON.stringify(rates));
  }, [rates]);

  const resetRates = () => {
    setRates(ratesObject);
  };

  //ukryj, kiedy wszystkie noty = 0
  const hideFeedback =
    rates.good === 0 && rates.neutral === 0 && rates.bad === 0;
  console.log(rates);
  console.log(rates.good);
  console.log(hideFeedback);
  return (
    <>
      <Description />
      {
        <Options
          updateFeedback={updateFeedback}
          reset={resetRates}
          showResetButton={!hideFeedback}
        />
      }
      {hideFeedback ? (
        <Notification />
      ) : (
        <Feedback good={rates.good} neutral={rates.neutral} bad={rates.bad} />
      )}
    </>
  );
}

export default App;
