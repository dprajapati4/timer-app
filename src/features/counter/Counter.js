import styles from "./Counter.module.css";
import React, { useState, useEffect } from "react";

export function Counter() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const onChangeName = (e) => {
    e.preventDefault();
    setTaskName(e.target.value);
  };
  const onChangeTime = (e) => {
    e.preventDefault();
    setTime(e.target.value);
  };

  const onStart = () => {
    if (!taskName) {
      alert("Name your task before starting the timer!");
    } else {
      setRunning(true);
    }
  };

  const onStop = () => {
    if (running) {
      setRunning(false);
    }
  };

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [running, time]);
  console.log({ taskName, time, running });

  return (
    <div className={styles.counter}>
      <div className={styles.input}>
        <label htmlFor="task">Task</label>
        <input type="text" value={taskName} onChange={onChangeName} />
        <label htmlFor="time">Time:</label>
        <input type="number" min={0} value={time} onChange={onChangeTime} />
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
      </div>
      {taskName && (
        <div className="table">
          <table>
            <tbody>
              <tr>
                <th>Task</th>
                <th>Time Required</th>
              </tr>
              <tr>
                <td>{taskName}</td>
                <td>{time}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
