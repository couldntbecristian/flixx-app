const global = {
  currentPage: window.location.pathname
}

console.log(global.currentPage)

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
      console.log('home')
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