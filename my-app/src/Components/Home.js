import image from "./Images/forest.png";

function Home() {
    return (
      <><div className="container" /><div style={{
        backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "img-fluid", width:"100vw", height: "100vh",      display: "flex",         // Enables flexbox to center the text
        justifyContent: "center", // Centers horizontally
        alignItems: "center",    // Centers vertically
        color: "white",         
        fontSize: "3rem",        // Optional: makes the text larger
        textAlign: "center",     // Centers text within its container
        fontWeight: "bold",       // Optional: makes the text bold
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), 0px 0px 25px black, 0px 0px 5px white", // White borders effect
      }}>
        Welcome to the Hikers Club 
      </div></>
    )
  }

export default Home;