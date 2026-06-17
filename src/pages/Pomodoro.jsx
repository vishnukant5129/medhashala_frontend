import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import ProgressRing from "../components/pomodoro/ProgressRing";
import TimerDisplay from "../components/pomodoro/TimerDisplay";
import TimerControls from "../components/pomodoro/TimerControls";
import SessionInfo from "../components/pomodoro/SessionInfo";
import ModeSwitcher from "../components/pomodoro/ModeSwitcher";

const timerMap = {
  focus: 25 * 60,
  "short-break": 5 * 60,
  "long-break": 15 * 60,
};

const Pomodoro = () => {
  const [mode, setMode] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(timerMap.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionCount, setSessionCount] = useState(1);

  useEffect(() => {
    setTimeLeft(timerMap[mode]);
    setIsRunning(false);
  }, [mode]);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);

      if (mode === "focus") {
        setSessionCount((prev) => prev + 1);

        setMode(sessionCount % 4 === 0 ? "long-break" : "short-break");
      } else {
        setMode("focus");
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode, sessionCount]);

  const totalTime = timerMap[mode];
  const percentage = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#F8FAFC] p-6"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-[#0B1F3A]">
            Pomodoro Timer 
          </h1>
          <p className="text-gray-500 mt-2">
            Focus, take breaks, and build consistency.
          </p>
        </div>

        {/* Main Card */}
        <div
          className="
            bg-white
            border border-[#E2E8F0]
            rounded-3xl
            p-8
            shadow-sm
            hover:shadow-lg
            transition-all duration-300
          "
        >
          <ModeSwitcher mode={mode} setMode={setMode} />

          <div className="flex justify-center my-10">
            <ProgressRing percentage={percentage}>
              <TimerDisplay timeLeft={timeLeft} />
            </ProgressRing>
          </div>

          <SessionInfo mode={mode} sessionCount={sessionCount} />

          <div className="mt-10">
            <TimerControls
              isRunning={isRunning}
              onStart={() => setIsRunning(true)}
              onPause={() => setIsRunning(false)}
              onReset={() => {
                setIsRunning(false);
                setTimeLeft(timerMap[mode]);
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pomodoro;