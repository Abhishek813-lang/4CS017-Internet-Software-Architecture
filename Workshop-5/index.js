const apiKey = 'b4cdfba7'; 

async function getMovieData() {
  const movieTitle = document.getElementById('movieTitle').value.trim();
  const url = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.Response === 'False') {
      document.getElementById('movieData').innerHTML = `<p>${data.Error}</p>`;
    } else {
      const movieInfo = `
        <h2>${data.Title}</h2>
        <img src="${data.Poster}" alt="${data.Title} Poster">
        <p>Released: ${data.Released}</p>
        <p>Runtime: ${data.Runtime}</p>
        <p>Actors: ${data.Actors}</p>
        <p>ImdbRating: ${data.imdbRating}</p>
      `;
      document.getElementById('movieData').innerHTML = movieInfo;
    }
  } catch (error) {
    document.getElementById('movieData').innerHTML = `<p>An error occurred: ${error}</p>`;
    
  }
}
