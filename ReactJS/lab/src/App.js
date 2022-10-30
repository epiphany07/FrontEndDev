import logo from './logo.svg';
import './App.css';
import TrafficLights from './components/TrafficLights';
import Hook3 from './components/arrayTable';
// import Demo from './components/useState'
// import Demo from './components/MapFilterReduce'
import Demo from './components/colorchange'
// import ViewItems from './useStateDemo';
import DigiClock from './components/useEffectdemo';
import { DigitalClock } from './components/DigitalClock';
import USECONXT from './components/usecontext';
import Counter from './components/Counter';
import BMICalc from './components/BMICalc'
import DataFetching from './components/AxiosDemo';
function App() {
  return (
    <div className="App">
      {/* <TrafficLights /> */}
      {/* <Hook3 /> */}
      {/* <Demo /> */}
      {/* <ViewItems /> */}
      {/* <DigiClock /> */}
      {/* <DigitalClock /> */}
      {/* <USECONXT /> */}
      {/* <Counter /> */}
      {/* <BMICalc /> */}
      <DataFetching />
    </div>
  );
}

export default App;
