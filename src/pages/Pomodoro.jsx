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

  const [timeLeft, setTimeLeft] = useState(
    timerMap.focus
  );

  const [isRunning, setIsRunning] =
    useState(false);

  const [sessionCount, setSessionCount] =
    useState(1);

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

        if (sessionCount % 4 === 0) {
          setMode("long-break");
        } else {
          setMode("short-break");
        }
      } else {
        setMode("focus");
      }
    }

    return () => clearInterval(interval);
  }, [
    isRunning,
    timeLeft,
    mode,
    sessionCount,
  ]);

  const totalTime = timerMap[mode];

  const percentage =
    ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Pomodoro Timer 🍅
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <ModeSwitcher
            mode={mode}
            setMode={setMode}
          />

          <div className="flex justify-center my-10">
            <ProgressRing percentage={percentage}>
              <TimerDisplay
                timeLeft={timeLeft}
              />
            </ProgressRing>
          </div>

          <SessionInfo
            mode={mode}
            sessionCount={sessionCount}
          />

          <div className="mt-8">
            <TimerControls
              isRunning={isRunning}
              onStart={() =>
                setIsRunning(true)
              }
              onPause={() =>
                setIsRunning(false)
              }
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