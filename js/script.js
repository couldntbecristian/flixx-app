const global = {
  currentPage: window.location.pathname
}
// console.log(global.currentPage)

async function displayPopularMovies() {
  // destructuring the object
  const { results } = await fetchAPIData('movie/popular')

  results.forEach(movie => {
    const div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
          ${
            movie.poster_path 
            ? `
              <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />
            ` :`
              <img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
          }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
    `

    document.querySelector('#popular-movies').appendChild(div)
  })

  console.log(results)
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = '27bc400c7ea66fee7720b7bbe50ba4cd'
  const API_URL = 'https://api.themoviedb.org/3/'

// query string ? 
  const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)

  const data = await response.json()

  return data
}

// highlight active link
function highlightActiveLink(){
  const links = document.querySelectorAll('.nav-link')
  links.forEach(link => {
    if (link.getAttribute('href') === global.currentPage){
      link.classList.add('active')
    }
  } )
}


// init app
function init() {
  switch (global.currentPage) {
    case '/011-flixx-app/':
    case '/011-flixx-app/index.html': 
      displayPopularMovies()
      break
    case '/011-flixx-app/shows.html':
      console.log('shows')
      break
    case '/011-flixx-app/movie-details.html':
      console.log('movie details')
      break
    case '/011-flixx-app/tv-details.html':
      console.log('tv details')
      break
    case '/011-flixx-app/search.html':
    console.log('search')
    break
  }

  highlightActiveLink()
}

document.addEventListener('DOMContentLoaded', init)