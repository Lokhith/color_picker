import React, { useState } from 'react';
import './index.css'; // Assuming the CSS is separated

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <div className="header-block">
      <h1 className="gradient-text">Color Picker</h1>
      <p className="sub-heading">Pick your perfect shade with style ✨</p>
    </div>

      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>

      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
