import { useState } from "react";
import "./App.css";
import Description from "./Description";

const [notes, setNotes] = useState({ good: 0, neutral: 0, bad: 0 });
const updateGood = () => {
  setNotes({
    ...notes,
    good: notes.good + 1,
  });
};
function App() {
  return (
    <>
      <Description />
    </>
  );
}

export default App;
