export default function MovieChip( {data, setSelected} ) {
    const handleClick = () => {
        setSelected((prev)=> prev.filter((item) => item !== data));
    }
    return (
    <div style={{
        display: "flex", 
        flexDirection:"row",  
        justifyContent: 'space-between',
        color: "#FFFFFF",
        background: "#148A08",
        borderRadius: "20px",
        padding: "15px",
        fontFamily: "Roboto",
        fontWeight: "400",
        width: "125px"
    }}>
        {data}
        &nbsp;
        &nbsp;
        <span onClick={handleClick} style={{
            color: "#085C00",
            fontWeight: "400"
        }}>X</span>
    </div>
    )
}