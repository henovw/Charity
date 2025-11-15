import Item from "./Item";

function Tier(props) {
  return (
    <div>
      <h1>Tier {props.tier}</h1>

      {/* Turns a list of the JavaScript objects to a list of rendered components */}
      {/* Go through the list and for each object, use the data to make an <Item/> */}
      {props.list.map((item) => (
        // This calls Item(name, image) in components/Item.jsx
        <Item name={item.name} image={item.image} />
      ))}
    </div>
  );
}

export default Tier;
