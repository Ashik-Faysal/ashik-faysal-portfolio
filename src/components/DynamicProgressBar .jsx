import React from "react";

const DynamicProgressBar = ({ htmlProgress, cssProgress, jsProgress }) => {
  return (
    <div>
      {/* HTML Progress bar */}
      <div
        style={{
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "5px", // Adding rounded corners
          overflow: "hidden", // Hiding overflow to keep rounded corners intact
        }}
      >
        <div
          style={{
            width: `${htmlProgress}%`,
            backgroundColor: "#007bff",
            height: "10px",
            borderRadius: "5px", // Adding rounded corners to the progress bar
          }}
        />
      </div>
      <span>HTML: {htmlProgress}%</span>

      {/* CSS Progress bar */}
      <div
        style={{
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "5px", // Adding rounded corners
          overflow: "hidden", // Hiding overflow to keep rounded corners intact
        }}
      >
        <div
          style={{
            width: `${cssProgress}%`,
            backgroundColor: "#28a745",
            height: "10px",
            borderRadius: "5px", // Adding rounded corners to the progress bar
          }}
        />
      </div>
      <span>CSS: {cssProgress}%</span>

      {/* JS Progress bar */}
      <div
        style={{
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "5px", // Adding rounded corners
          overflow: "hidden", // Hiding overflow to keep rounded corners intact
        }}
      >
        <div
          style={{
            width: `${jsProgress}%`,
            backgroundColor: "#ffc107",
            height: "10px",
            borderRadius: "5px", // Adding rounded corners to the progress bar
          }}
        />
      </div>
      <span>JS: {jsProgress}%</span>
    </div>
  );
};

export default DynamicProgressBar;
