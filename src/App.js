import "./App.css";
import Card from "./components/Card";
import PomodoroBar from "./components/PomodoroBar";
import StartButton from "./components/StartButton";
import Timer from "./components/Timer";
import { useState } from "react";

function App() {
  const [startMilliseconds, setStartMilliseconds] = useState(1500000);
  const [milliseconds, setMilliseconds] = useState(1500000);
  const [lastMilliseconds, setLastMilliseconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [view, setView] = useState("pomodoro");

  const handleStart = () => {
    const start = Date.now()
    const myInterval = setInterval(() => {
      setMilliseconds(startMilliseconds - (Date.now() - start) - lastMilliseconds)
    }, 100);
    setRunning(true);
    setIntervalId(myInterval);
  };

  const handlePause = () => {
    clearInterval(intervalId);
    setRunning(false);
    setLastMilliseconds(startMilliseconds - milliseconds)
  };

  const handleViewChange = (newView) => {
    setView(newView);
    setRunning(false);
    clearInterval(intervalId);
    setLastMilliseconds(0)
    if (newView === "pomodoro") {
      setMilliseconds(1500000);
      setStartMilliseconds(1500000)
    }
    if (newView === "shortBreak") {
      setMilliseconds(300000);
      setStartMilliseconds(300000)
    }
    if (newView === "longBreak") {
      setMilliseconds(900000);
      setStartMilliseconds(900000)
    }
  };
  const seconds = Math.floor(milliseconds / 1000)
  const mintues = Math.floor(seconds / 60);
  const minutesString = String(mintues).padStart(2, "0");
  const seconodsString = String(seconds % 60).padStart(2, "0");

  let bgColor = "";
  if (view === "pomodoro") {
    bgColor = "#d64c4c";
  } else if (view === "shortBreak") {
    bgColor = "#3F978B";
  } else {
    bgColor = "#3F5F97";
  }

  return (
    <div className={"App"} style={{ background: bgColor }}>
      <Card>
        <PomodoroBar onClick={handleViewChange} currView={view} />
        <Timer text={minutesString + ":" + seconodsString} />
        <StartButton
          text={running ? "Pause" : "Start"}
          onClick={running ? handlePause : handleStart}
          currView={view}
        />
      </Card>
    </div>
  );
}

export default App;
