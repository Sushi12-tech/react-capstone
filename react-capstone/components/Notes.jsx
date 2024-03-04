import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(localStorage.getItem("notes") ?? ""); // this thing runs only on first render
  const handleChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem("notes", e.target.value);
  };
  return (
    <div
      style={{
        background: "#F1C75B",
        width: "25vw",
        padding: "16px",
        marginTop: "12px",
        borderRadius: "19px"
      }}
    >
      <p 
      style={{
        fontFamily: "Roboto",
        fontWeight: "600",
        fontSize: '38px',
      }}>All notes</p>
      <textarea
        onChange={handleChange}
        value={notes}
        style={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: '21px',
          background: "#F1C75B",
          width: "23vw",
          maxWidth: "25vw",
          height: "40vh",
          maxHeight: "40vh",
          border: "none",
        }}
      ></textarea>
    </div>
  );
}