// From the folder this file is in (./) look for an Item.css file.
import "./Item.css";

// We define <Item /> by writing a function called Item
function Item(props) {
  // props = { image: "...", name: "..." } because we did <Item image="..." name="..." />
  // Components can only return one thing. That's why we wrapped everything in a div.
  return (
    <div className="item">
      <img src={props.image} className="logo" />
      <h2>{props.name}</h2>
    </div>
  );
}

// "export": make this file import-able by other files
// "default": Item is the most important export of this file
export default Item;
