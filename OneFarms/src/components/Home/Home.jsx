import image1 from "../../assets/image/1.webp";
import MarketUpdate from "./MarketUpdate";
import Video from "./Video";
import Events from "./Events";

function Home() {
  const myStyle = {
    backgroundImage: `url(${image1})`,
    marginTop: "-100px",
    width: "100%",
    height: "643px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="home" style={myStyle}>
        <div className="homeTexts">
          <h2>
            World Best Organic &amp;
            <br /> Healthy Farmers <br /> Industry
          </h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cupiditate, quia!
          </h3>
          <button>Learn More</button>
        </div>
      </div>
      <MarketUpdate />
      <Video />
      <Events />
    </>
  );
}

export default Home;
