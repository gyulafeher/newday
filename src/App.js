import './App.css';
import Diamond from './components/diamond'
import diamondConfig from "./config/diamond";

function App() {
  return (
    <div className="App">
      <Diamond
        midpointLetter={diamondConfig.midpointLetter}
        alphabet={diamondConfig.alphabet}
      />
    </div>
  );
}

export default App;
