import React, { useEffect, useMemo, memo } from "react";
import './App.css';

// The App component is memoized using React.memo
// This prevents unnecessary re-renders when the props don't change
const App = memo(() => {
  // State variables
  const [breakLength, setBreakLength] = React.useState(5); // Break length
  const [sessionLength, setSessionLength] = React.useState(25); // Session length
  const [timeLeft, setTimeLeft] = React.useState(1500); // Time left in seconds (25 minutes)
  const [timingType, setTimingType] = React.useState("SESSION"); // Timing type (SESSION or BREAK)
  const [play, setPlay] = React.useState(false); // Play/pause state

  // Memoized values
  const timeFormatter = useMemo(() => {
    // Function to format the time left in mm:ss format
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  }, [timeLeft]); // Memoize the timeFormatter based on timeLeft

  const title = useMemo(
    () => (timingType === "SESSION" ? "Session" : "Break"),
    [timingType]
  ); // Memoize the title based on timingType

  useEffect(() => {
    // Set up an interval to update the timeLeft every second
    const interval = setInterval(() => {
      // If the countdown is running and there's time left
      if (play && timeLeft > 0) {
        setTimeLeft(timeLeft - 1); // Decrement timeLeft
      } else if (timeLeft === 0) {
        // If timeLeft reaches 0
        resetTimer(); // Reset the timer
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [play, timeLeft]); // Only re-run the effect when play or timeLeft changes

  /**
   * Increases the break length by 1 if it is less than 60.
   *
   * @return {void} This function does not return anything.
   */
  const handleBreakIncrease = () => {
    // Increase the break length
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  /**
   * Decrease the break length
   */
  const handleBreakDecrease = () => {
    // Decrease the break length
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  /**
   * Increase the session length.
   */
  const handleSessionIncrease = () => {
    // Increase the session length
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      // Update timeLeft only if the countdown is not running
      if (!play) {
        setTimeLeft((sessionLength + 1) * 60);
      }
    }
  };

  /**
   * Decreases the session length.
   *
   * @return {undefined} - No return value.
   */
  const handleSessionDecrease = () => {
    // Decrease the session length
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      // Update timeLeft only if the countdown is not running
      if (!play) {
        setTimeLeft((sessionLength - 1) * 60);
      }
    }
  };

  /**
   * Reset the timer and all related settings.
   */
  const handleReset = () => {
    // Reset the timer
    setPlay(false); // Stop the countdown
    setTimeLeft(1500); // Reset timeLeft to 25 minutes
    setBreakLength(5); // Reset break length to 5 minutes
    setSessionLength(25); // Reset session length to 25 minutes
    setTimingType("SESSION"); // Reset timing type to SESSION
    const audio = document.getElementById("beep"); // Get the audio element
    audio.pause(); // Pause the audio
    audio.currentTime = 0; // Reset the audio playback position
  };

  /**
   * Toggles the play/pause state.
   *
   * @return {void} No return value.
   */
  const handlePlay = () => {
    // Toggle play/pause state
    setPlay(!play);
  };

  /**
   * Resets the timer based on the current timing type.
   *
   * @return {void} This function does not return a value.
   */
  const resetTimer = () => {
    const audio = document.getElementById("beep"); // Get the audio element
    if (!timeLeft && timingType === "SESSION") {
      // If timeLeft is 0 and it's a SESSION
      setTimeLeft(breakLength * 60); // Set timeLeft to break length in seconds
      setTimingType("BREAK"); // Switch to BREAK
      audio.play(); // Play the audio
    }
    if (!timeLeft && timingType === "BREAK") {
      // If timeLeft is 0 and it's a BREAK
      setTimeLeft(sessionLength * 60); // Set timeLeft to session length in seconds
      setTimingType("SESSION"); // Switch to SESSION
      audio.pause(); // Pause the audio
      audio.currentTime = 0; // Reset the audio playback position
    }
  };

  // Render the component
  return (
    <div className="container">
      <div className="wrapper">
        <h2>Pomodoro Clock</h2>
        <div className="break-session-length">
          <div>
            <h3 id="break-label">Break Length</h3>
            <div>
              <button
                disabled={play}
                onClick={handleBreakIncrease}
                id="break-increment"
              >
                Increase
              </button>
              <strong id="break-length">{breakLength}</strong>
              <button
                disabled={play}
                onClick={handleBreakDecrease}
                id="break-decrement"
              >
                Decrease
              </button>
            </div>
          </div>
          <div>
            <h3 id="session-label">Session Length</h3>
            <div>
              <button
                disabled={play}
                onClick={handleSessionIncrease}
                id="session-increment"
              >
                Increase
              </button>
              <strong id="session-length">{sessionLength}</strong>
              <button
                disabled={play}
                onClick={handleSessionDecrease}
                id="session-decrement"
              >
                Decrease
              </button>
            </div>
          </div>
        </div>
        <div className="timer-wrapper">
          <div className="timer">
            <h2 id="timer-label">{title}</h2>
            <h3 id="time-left">{timeFormatter}</h3>
          </div>
          <button onClick={handlePlay} id="start_stop">
            { play ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset} id="reset">
            Reset
          </button>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
});

App.displayName = "App";

export default App;
