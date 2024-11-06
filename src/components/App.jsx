import { useState } from "react";
import "./App.css";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

function App() {
  const notesObject = { good: 0, neutral: 0, bad: 0 };
  const [notes, setNotes] = useState(notesObject);
  const updateFeedback = (value) => {
    setNotes({
      ...notes,
      [value]: notes[value] + 1,
    });
  };

  const resetNotes = () => {
    setNotes(notesObject);
  };

  const allNotesAreZero =
    notes.good === 0 && notes.neutral === 0 && notes.bad === 0;
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        reset={resetNotes}
        showResetButton={!allNotesAreZero}
      />
      {allNotesAreZero ? (
        <Notification />
      ) : (
        <Feedback good={notes.good} neutral={notes.neutral} bad={notes.bad} />
      )}
    </>
  );
}

export default App;
