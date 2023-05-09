export default async function fetchMovies(searchVal, page, year) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=7035c60c&s=${searchVal}&page=${page}&y=${year}`
  )
  const data = await res.json()
  return data.Search
}

try {
  const movieList = document.querySelector('.movie-list')
  const numPages = parseInt(document.querySelector('#num-pages').value)
  const movies = []
  for (let i = 1; i <= numPages; i++) {
    const data = await fetchMovies(searchInputVal, i)
    movies.push(...data.Search)
  }
  const year = select.value
  const page = parseInt(document.querySelector('#num-pages').value)
  const data = await fetchMovies(searchtVal, page, year)
  const movieItems = data.map(({ Title, Year, imdbID, Poster }) => {
    return `
      <div class="swiper-slide">
        <h2>${Title} (${Year})</h2>
        <p><img class="poster" src=${Poster} alt="${Title}" onerror="this.onerror=null; this.src='/No-image-available.jpg';" onclick="getDetails('${imdbID}')">
        </p>
        <div class="movie-data" style="display: none;"></div>
      </div>
    `
  })
  movieList.innerHTML = movieItems.join('')
} catch (error) {
  alert('API 요청에 실패했습니다! ', error)
}
