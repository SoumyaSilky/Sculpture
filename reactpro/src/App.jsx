import { useState } from "react";
import { sculptureList } from "./data";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex((index + 1) % sculptureList.length); 
    setShowMore(false); // reset description when moving to next
  }

  function handleImageClick() {
    setShowMore(!showMore); // toggle description on image click
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        onClick={handleImageClick} // image is clickable
        style={{ cursor: "pointer" }} // show pointer on hover
      />
      <br />
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
}

export default App;


// useState, as well as any other function starting with "use", is called Hook. 


// Assignment -> make image clickable to show the description of the image 
// Post it on github 