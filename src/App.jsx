import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const random = [
    "Fuel level sensor",
    "C43",
    "S168-4G",
    "MiFare_RFID",
    "ADAS",
    "GT-MP320 Reader",
    "AI Fuel Sensor",
    "FMS",
    "CRM",
    "Card Reader",
    "H5",
    "FUHO VSCC Monitor",
    "Free",
    "Door Sensor",
    "Smart Box",
    "ADC fuel sensor",
    "AI fuel sensor V2",
    "S168-M3",
    "128G SD Card",
    "Tiredness Sensor",
    "Working Sensor",
    "Cloud Video Backup",
    "R-Watch",
    "Streamax DMS",
    "256G SSD",
  ];
  const [shuffled, setShuffled] = useState([]);
  const [clickedItems, setClickedItems] = useState([]);

  useEffect(() => {
    const shuffledArray = [...random].sort(() => Math.random() - 0.5);
    setShuffled(shuffledArray);
  }, []);

  const handleItemClick = (item) => {
    if (!clickedItems.includes(item)) {
      setClickedItems([...clickedItems, item]); // Add clicked item to the state
    }
  };

  return (
    <div className="main-board">
      <h1>BINGO</h1>
      <div className="board">
        {shuffled.map((item, i) => (
          <p
            className="board-block"
            style={{
              backgroundColor: clickedItems.includes(item) ? "red" : "white", // Dynamically set background color
            }}
            onClick={() => handleItemClick(item)}
            key={i}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
