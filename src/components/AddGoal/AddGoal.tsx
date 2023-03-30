import React, { useState } from "react";
import "./AddGoal.css";


export const AddGoal = (props: any) => {
  const [goalString, setGoalString] = useState("");
  const [invalid, setInvalid] = useState(false);
  const goalInputHandler = (event: any) => {
    setGoalString(event.target.value);
    setInvalid(false);

  }

  const submitGoalToListHandler = (event: any) => {
    event.preventDefault();
    if (goalString.trim().length === 0) {
      setInvalid(true)
      return;
    }
    props.onAddGoal(goalString)
    setGoalString("");
  }
  return (
    <div>
      <form className="input-conatainer" onSubmit={submitGoalToListHandler}>
        <input className={invalid ? "input-field-invalid" : "input-field"} value={goalString} type="text" onChange={goalInputHandler} placeholder="Enter here"/>
        <button className="add-goal-button" type="submit">Add Goal</button>
      </form>
    </div>
  )
}
