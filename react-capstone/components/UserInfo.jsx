export default function UserInfo() {
  const info = JSON.parse(localStorage.getItem("userInfo"));
  const movies = JSON.parse(localStorage.getItem("selectedMovies"));
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: "20px",
          background: " #5746EA ",
          width: "25vw",
          padding: "16px",
          color: "white",
        }}
      >
        <img src="../assets/userInfo.png" alt="userImage" />
        <div
          style={{
            paddingTop: "30px",
          }}
        >
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "20px",
            }}
          >
            {info.name}
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "400",
              fontSize: "20px",
            }}
          >
            {info.email}
          </p>
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            {info.username}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: " 0.5fr 0.5fr",
            }}
          >
            {movies.map((item) => {
              return (
                <div
                  style={{
                    marginBottom: "10px",
                    width: "125px",
                    background: "#9F94FF",
                    borderRadius: "20px",
                    padding: "6px",
                    textAlign: "center",
                    fontFamily: "Roboto",
                    fontWeight: "400",
                    fontSize: "15px",
                  }}
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
