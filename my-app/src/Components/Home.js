import image from "./Images/forest.png";

function Home() {
    return (
        <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"img-fluid", 
        }}>
        Welcome to the Hiking Club
      </div>
    )
  }
export default Home;