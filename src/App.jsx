import "./App.css";
import Tier from "./components/Tier";
// import { useState } from "react";

function App() {
  // const [counter, setCounter] = useState(0);

  const aTierItems = [
    {
      name: "Five Guys",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZuT1CDTg-N6EMe8cAlh000s1VjUxeVbnKw&s",
    },
    {
      name: "Taco Bell",
      image:
        "https://m.media-amazon.com/images/I/61Icj7baubL._UF1000,1000_QL80_.jpg",
    },
  ];

  const fTierItems = [
    {
      name: "KFC",
      image: "https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg",
    },
  ];

  return (
    <div className="app">
      {/* <button onClick={() => setCounter(counter + 1)}>Increment</button> */}

      {/* This calls Tier(tier, list) in components/Tier.jsx */}
      <Tier tier="A" list={aTierItems} />
      <Tier tier="F" list={fTierItems} />
    </div>
  );
}

export default App;
