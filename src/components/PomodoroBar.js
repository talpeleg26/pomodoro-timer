import "./PomodoroBar.css";

const PomodoroBar = ({ onClick, currView }) => { 
  return (
    <div className="pomodoro_bar">
      <p
        className={
          currView === "pomodoro"
            ? "pomodoro_option_selected"
            : "pomodoro_option"
        }
        onClick={() => onClick("pomodoro")}
      >
        Pomodoro
      </p>
      <p
        className={
          currView === "shortBreak"
            ? "pomodoro_option_selected"
            : "pomodoro_option"
        }
        onClick={() => onClick("shortBreak")}
      >
        Short Break
      </p>
      <p
        className={
          currView === "longBreak"
            ? "pomodoro_option_selected"
            : "pomodoro_option"
        }
        onClick={() => onClick("longBreak")}
      >
        Long Break
      </p>
    </div>
  );
};

export default PomodoroBar;
