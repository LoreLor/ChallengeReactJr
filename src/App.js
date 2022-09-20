//import HelloWorld from "./components/HolaMundo";
import TwoWayData from "./components/2WayData";
import AddChildComponent from "./components/AddChildComponent";
import DisableButton from "./components/DisableButton";
import HelloWorld from "./components/HolaMundo";
import ShowHide from "./components/ShowHide";
import SumNumbers from "./components/SumNumbers";
import UpdateParentState from "./components/UpdateParentState";
import Counter from "./components/Counter"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      <HelloWorld />
      <ShowHide />
      <br />
      <TwoWayData />
      <br />
      <DisableButton />
      <br />
      <UpdateParentState />
      <br />
      <AddChildComponent />
      <br />
      <SumNumbers />
      <br />
      <Counter />
    </div>
  );
}
