import logo from './logo.svg';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
     
        <Welcome/>
        <h1>Counter Application</h1>
            <CounterClass />
            <CounterFunction />

      
    </div>
  );
}

export default App;
