import React from "react";
import "./Palette.css";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//팔레트 아이템의 props로 색상과 행동 온클릭을 받는다.
const PaletteItem = ({ color, active, onClick }) => {
  return (
    <div
      //color과 selected가 같을 때 active를 한다.
      className={`PaletteItem ${active ? "active" : ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
};

//red를 프롭으로 받았다.
const Palette = ({ selected }) => {
  return (
    <div className="Palette">
      <h2>색깔을 골라골라</h2>
      <div className="colors">
        {/*color의 요소인 색깔을 props로 전달한다.*/}
        {colors.map((color) => (
          <PaletteItem color={color} key={color} active={selected === color} />
        ))}
      </div>
    </div>
  );
};

export default Palette;
