export default function Footer({ newItems }) {
  const itemsLength = newItems.length || 0;
  const packedItems = newItems.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / itemsLength) * 100) || 0;

  return (
    <div>
      <p>
        {percentage === 100
          ? `You packed everything and ready to go ✈️`
          : percentage === 0 && itemsLength === 0
            ? `❤️ Please start adding items 🎁 📚📱💻💊🚗🎹🗝️🫖🍾🍷🍥`
            : `You have (${itemsLength}) items in your Lists. And You Have Packed (${packedItems}) items now (${percentage}%).`}
      </p>
    </div>
  );
}
