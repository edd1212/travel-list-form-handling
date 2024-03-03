import { useState } from "react";

export default function MyForm({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [selectQty, setSelectQty] = useState(1);

  function formHandler(e) {
    e.preventDefault();
    if (description === "") return;
    const newItem = { description, selectQty, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
    setSelectQty(1);
  }
  return (
    <form onSubmit={formHandler}>
      <div>
        <select
          value={selectQty}
          onChange={(e) => setSelectQty(Number(e.target.value))}
        >
          {/* {Array.from([1, 2, 3, 4, 5, 6, 7], (x) => x).map((item) => (
              <option value={item} key={item}>{item}</option>
            ))} */}

          {Array.from({ length: 20 }, (_, x) => x + 1).map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          value={description}
          placeholder="Enter an Item.." />
      </div>
      <button>Submit</button>
    </form>
  );
}
