import { Select } from "./lib";


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Select data={["hello", "hi", "Bonjour"]}/>
      <ul>
        <li>
          Bulbizarre
        </li>
        <li>
          Carapuce
        </li>
        <li>
          Salamèche
        </li>
      </ul>
    </div>
  );
}

export default App;
