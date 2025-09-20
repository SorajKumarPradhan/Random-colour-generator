import { useState } from "react";

//generate random color

const App = () => {
  const [colors, setColors] = useState([]);
  const colorHandler = () => {
    const words = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numberOfColors = 10;
    const ALL_COLOR = [];
    for (let i = 0; i < numberOfColors; i++) {
      let color = "#";
      for (let j = 0; j < 6; j++) {
        color += words[Math.floor(words.length * Math.random())];
      }
      ALL_COLOR.push(color);
    }
    console.log(ALL_COLOR);
    setColors(ALL_COLOR);
  };
  return (
    <div style={{ display: "flex", minWidth: "100vh" }}>
      {colors.map((color) => (
        <ColorComponet color={color} key={color}></ColorComponet>
      ))}
      <button onClick={colorHandler}>Generate</button>
    </div>
  );
};

const ColorComponet = ({ color }) => {
  return (
    <div
      style={{
        width: "150px",
        height: "400px",
        background: `${color}`,
      }}
    >
      <h1>{color}</h1>
    </div>
  );
};
export default App;
