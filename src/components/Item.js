export default function Item({ item, deleteItem, toggleItem }) {
    return (
      <li>
        <span className="name">
          <input
            value={item.packed}
            onChange={() => {
              toggleItem(item.id);
            }}
            type="checkbox"
          />
          <small>{item.selectQty}</small> &nbsp;
          <span
            style={
              item.packed
                ? {
                    textDecoration: "line-through",
                    color: "darkred",
                  }
                : {}
            }
          >
            {item.description}
          </span>
          <span title="Remove Item" className="pointer">
            <small onClick={() => deleteItem(item.id)}>❌</small>
          </span>
        </span>
      </li>
    );
  }
  