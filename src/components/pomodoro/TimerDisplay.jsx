const TimerDisplay = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold text-[#0B1F3A]">
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </h1>
    </div>
  );
};

export default TimerDisplay;