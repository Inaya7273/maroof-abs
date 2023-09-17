document.getElementById('genre-filter').addEventListener('change', function () {
    const selectedGenres = Array.from(this.selectedOptions, option => option.value);
    const movies = document.querySelectorAll('.movie');
  
    movies.forEach(movie => {
      const movieGenres = movie.getAttribute('data-genre').split(',');
      if (selectedGenres.some(genre => movieGenres.includes(genre))) {
        movie.style.display = 'block';
      } else {
        movie.style.display = 'none';
      }
    });
  });
  
  document.getElementById('movie-search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const movies = document.querySelectorAll('.movie');
  
    movies.forEach(movie => {
      const title = movie.querySelector('.title').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        movie.style.display = 'block';
      } else {
        movie.style.display = 'none';
      }
    });
  });
  