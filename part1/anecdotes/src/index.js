import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, btnTxt }) => {
  return <button onClick={handleClick}>{btnTxt}</button>;
};

const App = props => {
  // the selected anecdote (index integer)
  const [selected, setSelected] = useState(0);
  // const a = anecdotes[1]
  const nextAnecdote = () => {
    console.log("next");
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const vote = () => () => {};

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <Button handleClick={nextAnecdote} btnTxt="Next anecdote" />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App />, document.getElementById("root"));
