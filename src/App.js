import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setLastName,
  highlightName,
  highlightLastName,
} from "./redux";
import { ELEMENTS } from "./elements";
import "./App.css";

function App() {
  const [nameInput, setNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const dispatch = useDispatch();
  const highlightedName = useSelector((state) => state.name.highlightedName);
  const highlightedLastName = useSelector(
    (state) => state.name.highlightedLastName
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(nameInput));
    dispatch(setLastName(lastNameInput));
    dispatch(highlightName({ ELEMENTS }));
    dispatch(highlightLastName({ ELEMENTS }));
  };

  return (
    <div className="App">
      <div className="display">
        <div dangerouslySetInnerHTML={{ __html: highlightedName }} />
        <div dangerouslySetInnerHTML={{ __html: highlightedLastName }} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="field">
            <label htmlFor="firstName">First Name</label>
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="field">
            <label htmlFor="firstName">Last Name</label>
            <input
              value={lastNameInput}
              onChange={(e) => setLastNameInput(e.target.value)}
              placeholder="Last Name"
            />
          </div>
        </div>
        <button type="submit">Breakify</button>
      </form>
    </div>
  );
}

export default App;
