import { useEffect } from "react";
import { fetchColors } from "../../APIservice/APIservice";
import { useState } from "react";
import "./ColorPalette.css";
import Header from "../Header";

const ColorPalette = () => {
  const [availableColors, setAvailableColors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchColors().then((colors) => {
      setLoading(false);
      setAvailableColors(colors);
    });
  }, []);

  console.log("availableColors = ", availableColors);

  return (
    <>
      <Header />
      <div className="palette-title">
        <h1>🎨 Available Colors</h1>
      </div>
      {loading ? (
        <div className="cyrcle-container">
          <div className="cyrcle"></div>
        </div>
      ) : (
        <div className="color-palette">
          {availableColors.map((color) => {
            return (
              <div
                key={color.hex}
                className="color-item"
                style={{ backgroundColor: `${color.hex}` }}
              >
                {color.name}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ColorPalette;
