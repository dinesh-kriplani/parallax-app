import "./App.css";
import ParaSection from "./components/ParaSection";
import Parallax from "./components/Parallax";
import ParallaxProps from "./components/ParallaxProps";
import ParallaxShort from "./components/ParallaxShort";

function App() {
  const parallax = [
    {
      img: "/img/sky.jpg",
      title: "Scroll Up",
      subtitle: "",
      height: "50vh",
      bgColor: "",
      color: "#fff",
      para: "Scroll up and down to really get the feeling of how Parallax Scrolling works.",
      paraColor: "#fff",
      paraBG: "#999",
      titleColor: "#fff",
      titleBG: "",
    },
    {
      img: "/img/manSitting.jpg",
      title: "Man Sitting at Beach",
      subtitle: "",
      height: "100vh",
      bgColor: "",
      color: "#fff",
      para: "Scroll up and down to really get the feeling of how Parallax Scrolling works.",
      paraColor: "#fff",
      paraBG: "#999",
      titleColor: "#fff",
      titleBG: "#888",
    },
  ];

  return (
    <div className="App">
      <Parallax />

      <ParaSection />

      <ParallaxShort />

      {parallax.map((data, i) => (
        <ParallaxProps
          key={i}
          bgImg={data.img}
          title={data.title}
          subtitle={data?.subtile}
          height={data.height}
          bgColor={data?.bgColor}
          paragraph={data.para}
          paraBG={data.paraBG}
          paraColor={data.paraColor}
          titleColor={data.titleColor}
          titleBG={data.titleBG}
        />
      ))}
    </div>
  );
}

export default App;
