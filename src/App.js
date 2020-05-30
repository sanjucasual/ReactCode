import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";
//ffirst thing create a return fcunstion like person ,cause we are using reacthooks
//usestate is inbuilt function given by react when we import usestate from react

const app = (prop) => {
  const [personState, personStateset] = useState({
    person: [
      { name: "sanjee", age: 28 },
      { name: "Aarthi", age: 21 },
      { name: "Rajeev", age: 25 },
    ],
    otherState: "this wont be changed",
  });

  const toggleInput = () => {
    // console.log("i have been clicked");
    personStateset({
      person: [
        { name: "sanjeev", age: 28 },
        { name: "Aarthi sanjeev sharma", age: 21 },
        { name: "Rajeev", age: 25 },
      ],
    });
  };

  return (
    <div className="App">
      {/* //dont add paranthesis to function name */}
      <button onClick={toggleInput}>Change</button>
      <h1>Hello world my first component</h1>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      ></Person>
      <Person
        name={personState.person[1].name}
        age={personState.person[1].age}
      ></Person>
      <Person
        name={personState.person[2].name}
        age={personState.person[2].age}
      ></Person>
      <p>{personState.otherState}</p>
    </div>
  );
};
export default app;
