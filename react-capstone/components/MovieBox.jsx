export default function MovieBox({ data, selected, setSelected }) {
  const isSelected = selected.includes(data.id);
  const handleClick = () => {
    if (selected.includes(data.id)) {
      setSelected((prev) => prev.filter((item) => item !== data.id)); //we are filtering out all the items which are not equal to the currently selected data.id, in simple terms we are just removing the selected 'id' from the array
    } else {
      setSelected((prev) => {
        return [...prev, data.id];
      });
    }
  };
  return (
    <div
      onClick={handleClick}
      style={{
        background: data.color,
        width: "15vw",
        textAlign: "center",
        borderRadius: "10px",
        border: isSelected ? "10px solid white" : null,
      }}
    >
      <p
        style={{
          fontFamily: "DM Sans",
          color: "#FFFFFF",
          fontWeight: "500",
          fontSize: "36px",
        }}
      >
        {data.id}
      </p>
      {data.image}
    </div>
  );
}
