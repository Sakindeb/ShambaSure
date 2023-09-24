import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";


function List() {
  const [stageData, setStageData] = useState([]);

  // Use useEffect to fetch data from Firestore and set it to the state
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "stages"), (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        const stage = doc.data();
        data.push({
          id: doc.id,
          ...stage,
        });
      });
      setStageData(data);
    });

    // Unsubscribe from the Firestore listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {stageData.map((stage) => (
        <div key={stage.id}>
          <h3>{stage.stage}</h3>
          <p>Substage: {stage.substage}</p>
          <ul>
            {stage.tasks.map((task, index) => (
              <li key={index}>
                {task.task} (Completed: {task.completed ? "Yes" : "No"})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default List;
