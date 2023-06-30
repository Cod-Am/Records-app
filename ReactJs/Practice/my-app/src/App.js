
import './App.css';
import Header from './Header';
import Student from './Student';
function App() {
  
  return (
    <div className="App">
      <Header /> 
      <Student name="Amrit" rollno={2}/>
    </div>
  );
}

export default App;
