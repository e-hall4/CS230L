import './App.css';
import './NavBar';
import './Card';

function App() {
  return (
      <div className="App">
          <NavBar />
          <h1>CS 230L</h1>
          <h2>Section - 002</h2>
          <p>WVU ID: 800384692</p>
          <p>Hi I am Elijah</p>
          <p>Test to see if it is updating</p>
          <Card />
    </div>
  );
}

export default App;