import "./App.css";
import Device from "./components/Device/Device";
import Tablets from "./components/Tablets/Tablets";
import Watch from "./components/Watch/Watch";

function App() {
  return (
    <div className="App">
      <Device name="Aphone" price="120,000"></Device>
      <Watch></Watch>
      <Tablets></Tablets>
    </div>
  );
}

export default App;
