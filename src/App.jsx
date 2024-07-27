import { useState, useEffect, useCallback } from 'react'
import "./App.css"
import MovieComponent from './components/MovieComponent';
export const API_KEY = "16322f45";
import MovieInfoComponent from './components/MovieInfoComponent';

function App() {
  const [count, setCount] = useState(0)
  const [inputtext, setInputtext] = useState('name')
  const [apikey,setApikey]=useState("16322f45")
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();


function fetc(inputtext)
{
  fetch( `https://www.omdbapi.com/?s=${inputtext}&apikey=`+`${apikey}`)
  .then(res=>res.json())
  .then(data=>{setMovieList(data.Search)
    console.table(data)
  })
}

useEffect(() => {
  
onMovieSelect('')
  return () => {
    fetc(inputtext);
  }
}, [inputtext], [])


 
  
   


  return (
 <div className="container">
<div className="navbar">
 
    <div className='li'><img height="30px"  width="30px" src='https://rukminim2.flixcart.com/image/416/416/jhnqcnk0/car-sticker/j/3/g/1-thelogomancreation17-the-logo-man-original-imaf5m28cz8zpczz.jpeg?q=70&crop=false'></img></div>
    <div className='li'><p >Cine<span className='n'>Matic</span>
    </p></div>
   
  <div className="search li">
    <input type='text'  placeholder='Enter Movie Name' onChange={(e)=>{setInputtext(e.target.value)}}></input> 
</div>


</div>

{selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}


 <div className='MovieListContainer'>
         {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}

            />
          ))
        ) 
        : (
          <img  className="error" src="https://cdn.dribbble.com/users/1880522/screenshots/7117744/media/79c3c0f284c29d12ee50405f11c930f5.gif" />
        )
        }
      </div>

</div>

 
)
};

export default App
