import { useState } from "react";
import Item from "./Item";

export default function MyItems({ items, deleteItem, toggleItem }) {
  const [sortItem, setSOrtItem] = useState("sortitem");
  function sortFunction(e) {
    setSOrtItem(e.target.value);
  }

  let sortedItems;

  if (sortItem === "sortitem") sortedItems = items;
  if (sortItem === "sortdesc") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortItem === "sortpack") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            toggleItem={toggleItem}
            deleteItem={deleteItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div>
        <select value={sortItem} onChange={sortFunction}>
          <option value="sortitem">Sort items</option>
          <option value="sortdesc">Sort by name</option>
          <option value="sortpack">Sort by packing status</option>
        </select>
      </div>
    </div>
  );
}
