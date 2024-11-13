import "./StartButton.css";

const StartButton = ({ text, onClick, currView }) => {
  let bgColor = "";
  if (currView === "pomodoro") {
    bgColor = "#d64c4c";
  } else if (currView === "shortBreak") {
    bgColor = "#3F978B";
  } else {
    bgColor = "#3F5F97";
  }
  return (
    <div className="start_button" onClick={onClick} style={{color: bgColor}}>
      {text}
    </div>
  );
};

export default StartButton;
