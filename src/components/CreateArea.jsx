import React, { useState } from "react";
import herolist from "./HeroList";

function CreateArea(props) {
  const [note, setNote] = useState({
    hero: "",
    replay: "",
    winLoss: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function buttonSwitch(event) {
    console.log("switched");
  }

  function submitNote(event) {
    props.onAdd(note);

    setNote(prevNote => {
      return {
        ...prevNote,
        replay: "",
        winLoss: "",
        content: ""
      };
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input                   
          name="hero"
          onChange={handleChange}
          value={note.hero}
          placeholder="Hero"
        />
        <input
          name="replay"
          onChange={handleChange}
          value={note.replay}
          placeholder="Replay #"
          type="number"
          required
        />

        <input
          name="winLoss"
          onChange={handleChange}
          value={note.winLoss}
          placeholder="Win / Loss"
          required
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Notes (e.g. cs @ 10min, important moments, etc.)"
          value={note.content}
          rows="3"
          required
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
