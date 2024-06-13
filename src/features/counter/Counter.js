import React, { useState } from "react";

import styles from "./Counter.module.css";

export function Counter() {
  return (
    <div className={styles.counter}>
      <div className={styles.input}>
        <label for="task">Task</label>
        <input type="text" />
        <label for="time">Time:</label>
        <input type="number" min={0} />
        <button>Start</button>
        <button>Stop</button>
      </div>
      <div className="table">
        <table>
          <tr>
            <th>Task</th>
            <th>Time Required</th>
          </tr>
          <tr>
            <td>Test 1</td>
            <td>4</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
