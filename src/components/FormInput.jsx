import React from "react";

export default function FormInput(props) {
  const { name, updateName } = props;
  const { duration, updateDuration } = props;
  const { cuisine, updateCuisine } = props;



  return (
    <div>
      <form>
        <input
          type="text"
          name="search"
          value={name}
          onChange={updateName}
          placeholder="Name"
        ></input>
        <br />
        <input
          type="number"
          name="search"
          value={duration}
          onChange={updateDuration}
          placeholder="Duration"
        ></input>
        <br />
        <input
          type="text"
          name="search"
          value={cuisine}
          onChange={updateCuisine}
          placeholder="Cuisine"
        ></input>
        <br />
      </form>
    </div>
  );
}
