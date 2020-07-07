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

        <div className="radioButtons" onChange={handleChange}>
          <input type="radio" value="Win" name="winLoss" /> Win
          <input type="radio" value="Loss" name="winLoss" /> Loss
        </div>
        <select onChange={handleChange} name="hero">
          {herolist.map(hero => {
            return <option value={hero.name}>{hero.name}</option>;
          })}
        </select>
        <input
          name="replay"
          onChange={handleChange}
          value={note.replay}
          placeholder="Replay #"
          type="number"
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
