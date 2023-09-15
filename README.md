 const fetchGenre= async()=>{
    const genre= await fetch('https://image.tmdb.org/t/p/original/3/genre/movie/list')
    const genrejson= await genre.json()
    console.log(genrejson)
 }
 // https://anywhere.epam.com/e
//https://anywhere.epam.com/en/jobs?search=test%20engineer&specialization=automation%20tester
<p className={classes.inline} data-testid='movie-release-date'>{arr.release_date.split('').map((data,index)=>{if(index<4){return data}}).join('')}</p> · PG-13 · <p data-testid='movie-runtime' className={classes.inline}>{Math.floor(arr.runtime/60)}h {Math.floor(arr.runtime%60)}m
 