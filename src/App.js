import logo from "./logo.svg";
import "./App.css";
import ConfettiCard from "./ConfettiCard";
// import PartyMode from "./Component/PartyMode";
function App() {
  return (
    <div className="container">
      <ConfettiCard
        frontContent={<h3>Click to reveal</h3>}
        backContent={<p>Surprise!</p>}
      />
      {/* <PartyMode /> */}
    </div>
  );
}

export default App;
