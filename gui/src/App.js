import logo from "./assets/VidVerse-logo1-cropped.jpeg";
const logoBlue = "#495FA6";
// const logoBlue = "#F6AE84 ";
function Navbar() {
  return (
    <div
      className="Navbar"
      style={{
        display: "grid",
        position: "sticky",
        gridTemplateColumns: "3fr 3fr 6fr 3fr",
      }}
    >
      <div></div>
      <div className="logo-container">
        {" "}
        <img src={logo} style={{ width: "150px" }} />
      </div>
      <div
        className="search-bar-container1"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          className="search-bar"
          style={{
            border: "4px solid",
            borderColor: logoBlue,
            width: "700px",
            height: "45px",
          }}
        />
      </div>
    </div>
  );
}

function Videocard() {
  return (
    <div
      className="Videocard"
      style={{
        border: "2px solid ",
        borderColor: logoBlue,
        width: "300px",
        height: "175px",
        marginBottom: "5px",
        flexShrink: "0",
      }}
    ></div>
  );
}
function App() {
  return (
    <div className="App">
      {" "}
      <Navbar />
      <div
        className="video-container"
        style={{ display: "grid", gridTemplateColumns: "3fr 9fr 3fr" }}
      >
        <div></div>
        <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr" }}>
          <div
            className="video"
            style={{
              border: "2px solid",
              borderColor: logoBlue,
              width: "800px",
              height: "500px",
            }}
          ></div>{" "}
          <div
            className="video-list"
            style={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "720px",
              overflow: "auto",
            }}
          >
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
          </div>
          {/* video here */}
        </div>
      </div>
    </div>
  );
}

export default App;
