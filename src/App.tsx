import React, { useState } from 'react';
import './App.css';
import { AddGoal } from './components/AddGoal/AddGoal';
import { ListView } from './components/ListView/ListView';

function App() {
  const [goal, setGoal] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ])
  const addGoalHandler = (enteredText: any) => {
  setGoal((prevGoals: any) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const filterHandler = (id: string) => {
    setGoal(prevGoals => {
      console.log("$$$$$$", prevGoals, "%%%%%%%", id);

      const updatedGoals = prevGoals.filter(goal => goal.id !== id);
      return updatedGoals;
    });
  }
  let content = (<h2>No Records</h2>);
  console.log("from App.tsx ==", goal, goal.length);

  if (goal.length > 0) {
    content = <ListView items={goal} onDeleteItem={filterHandler}/>
  }
  return (
    <div className="App">
      <h1>Add Your Goals</h1>
      <AddGoal onAddGoal={addGoalHandler}/>
      {content}
    </div>
  );
}

export default App;
