import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ImageSlider Slider={SliderData} />
    </div>
  );
}

export default App;
