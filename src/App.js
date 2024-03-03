import { useState } from "react";
import Header from "./components/Header";
import MyItems from "./components/MyItems";
import MyForm from "./components/MyForm";
import Footer from "./components/Footer";

export default function App() {
  const [newItems, setNewItems] = useState([]);

  function handleAddItems(item) {
    setNewItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setNewItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setNewItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <Header />
      <MyForm onAddItems={handleAddItems} />
      <MyItems
        toggleItem={handleToggle}
        deleteItem={handleDeleteItems}
        items={newItems}
      />
      <Footer newItems={newItems} />
    </>
  );
}
