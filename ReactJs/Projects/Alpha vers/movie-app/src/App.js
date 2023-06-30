
import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import movies from "./movie.json";

function App() {
  return (
    <div className="App ">
      <Header />
      <div className='main'>
        {movies.map((element,index)=>{
          return(
          <Movie key={index} 
          name={element.Title} 
          year={element.Year}
          img={element.Poster} />)
        })}
        
        
      </div>
    </div>
  );
}

export default App;
