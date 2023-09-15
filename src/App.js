import './App.css';
import Movie from './Components/Movie/Movie';
import   Home from './Components/Home/Home'
//import Card from './Components/Card/Card';
import {Routes, Route} from 'react-router-dom'

function App() {


  return (
    <div className="App">
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/movie/:id' element={<Movie/>}/>


   </Routes>

      {//<Movie/>
//<Card/>
}
    </div>
  );
}

export default App;
