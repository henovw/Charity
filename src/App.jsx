import "./App.css";
import Tier from "./components/Tier";
import { useState } from "react";

function App() {
  // const [counter, setCounter] = useState(0);

  // States for our controlled inputs
  const [tier, setTier] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  // States for our data
  const [aTierItems, setATierItems] = useState([]);
  const [fTierItems, setFTierItems] = useState([]);

  function addToTier() {
    if (tier == "A") {
      // Set the aTierItems list to...
      setATierItems(
        // A new list equalling whatever it is now, plus this new object added to the back of the list
        aTierItems.concat({
          image: image,
          name: name,
        })
      );
    } else if (tier == "F") {
      setFTierItems(
        fTierItems.concat({
          image: image,
          name: name,
        })
      );
    }
  }

  return (
    <div className="app">
      {/* Default HTML-like input tags. Each tag is connected to and updates one state. */}
      <input
        type="text"
        value={tier}
        onChange={(e) => setTier(e.target.value)}
        placeholder="Tier"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {/* A button that calls the addToTier function when clicked */}
      <button onClick={addToTier}>Submit</button>

      {/* This calls Tier(tier, list) in components/Tier.jsx */}
      <Tier tier="A" list={aTierItems} />
      <Tier tier="F" list={fTierItems} />
    </div>
  );
}

export default App;
