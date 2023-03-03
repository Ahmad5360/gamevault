import React from "react";

export default function footer(props) {
    const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div
        className="text-center"
        style={{
          color: "#fff",
          fontSize: "14px",
          background: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          lineHeight:"30px",
          fontWeight:"lighter"
        }}
      >
        <p className="mt-1">Copyrights @ {currentYear} {props.title}.<br/> All Rights Reserved. Created By Ahmad Rashid</p>
      </div>
    </div>
  );
}
