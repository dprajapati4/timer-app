import styles from "./Counter.module.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addedTask } from "./taskSlice";

export function Counter() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

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
      if(taskName){
        dispatch(addedTask({taskName, time}))
      }
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
  console.log(tasks);

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
      {tasks && (
        <div className="table">
          <table>
            <tbody>
              <tr>
                <th>Task</th>
                <th>Time Required</th>
              </tr>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.taskName}</td>
                  <td>{task.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
