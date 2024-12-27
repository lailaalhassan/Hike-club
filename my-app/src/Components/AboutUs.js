function AboutUs() {
  return (
    <>
      <div className="container" />
      <div
        style={{
          display: "flex",           // Enables flexbox
          justifyContent: "center",  // Centers horizontally
          alignItems: "center",      // Centers vertically
          height: "100vh",           // Takes up the full height of the viewport
          color: "black",
          fontSize: "1rem",          // Optional: makes the text larger
          textAlign: "center",       // Centers text within its container
          padding: "20px",           // Optional: adds padding around the content
        }}
      >
        <p>
          <br />
          Welcome to the London Hikers Club, where adventure meets nature in the heart of one of the world's most vibrant cities. Founded in 2024, our club was created by a passionate group of outdoor enthusiasts who believe that everyone should experience the beauty and tranquility of the great outdoors, no matter where they live.
          <br />
          <br />
          At the London Hikers Club, we are dedicated to providing accessible, exciting, and safe hiking experiences for all levels of outdoor enthusiasts. Whether you're an experienced hiker seeking new challenges or a beginner looking to explore scenic routes, we offer a variety of hiking events, from weekend walks to weekend getaways, all designed to reconnect you with nature while enjoying the company of like-minded adventurers.
          <br />
          <br />
          Our mission is simple: to inspire people to step out of their busy lives and explore the stunning landscapes that are just a short distance away from the city. We believe in the power of nature to refresh the mind, body, and spirit, and we're here to provide a community where you can enjoy the best of both worlds — urban life and the peace of the great outdoors.
          <br />
        </p>
      </div>
    </>
  );
}

export default AboutUs;