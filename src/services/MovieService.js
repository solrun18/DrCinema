const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVlNDM2MmQ2MDJkMDc3OTYyOTVhNzMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IlPDs2xyw7puIMOBc3RhIEJqw7ZybnNkw7N0dGlyIiwiZW1haWwiOiJzb2xydW4xOEBydS5pcyIsInVzZXJuYW1lIjoic29scnVuIiwicGFzc3dvcmQiOiIkMmEkMDgkRmZ3WWFoYWFHSTcwSWN5M2NGcUlRdTZldzJERk81b2RkYjY4WXhGMVdtT0d5dUFOenFzdTYiLCJkb21haW4iOiIgaHR0cDovLyBhcGkua3Zpa215bmRpci5pcy8iLCJtZXNzYWdlIjoiUlUgU2Nob29sIHByb2plY3QiLCJpYXQiOjE1NzU5ODUwMzksImV4cCI6MTU3NjA3MTQzOX0.9eC8uQjQKaqbnrLppJzscPyBCBLojXo-godAjQVAgM4';
const ENDPOINT = 'http://api.kvikmyndir.is/theaters';

export const GetAllCinemas = () => ({
  getCinemas: () => fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  })
    .then((d) => d.json())
    .then((data) => data.map((cinema) => ({
      name: cinema.title,
      website: cinema.website,
    }))),
});

// Cinema Details  onIncrement() {
        const { counter } = this.state;
        this.setState({ counter: counter + 1 });
        const { incrementCounter } = this.props;
        incrementCounter(1);
    }
    render() {
export const GetCinemaDetails = (id) => ({
  getDetails: () => fetch(ENDPOINT)
    .then((d) => d.json())
    .then((data) => data.filter((cinema) => cinema.id === id))
    .then((data) => data.map((cinema) => ({
      id: cinema.id,
      name: cinema.name,
      website: cinema.website,
      phone: cinema.phone,
      description: cinema.description,
      address: cinema['address\t'],
      city: cinema.city,
    }))),
});

export const GetMoviesByCinemaId = (cinemaId) => ({
  getMovies: () => fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  })
    .then((d) => d.json())
    .then((data) => data.filter((movie) => movie.id === id))
    .then((data) => data.map((movie) => ({
      name: movie.title,
      image: movie.poster,
      plot: movie.plot,
      duration: movie.durationMinutes,
      year: movie.year,
      genres: movie.genres,
    }))),
});

// Movie Details
export const GetMovieDetailsById = (movieId, cinemaId) => ({
  getMovie: () => fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  })
    .then((d) => d.json())
    .then((data) => data.filter((movie) => movie.id === movieId))
    .then((movie) => {
      const temp = [];
      for (let x = 0; x < movie[0].showtimes.length; x + 1) {
        if (movie[0].showtimes[x].cinema.id === cinemaId) {
          temp.push(movie[0].showtimes[x]);
        }
      }
      return {
        id: movie[0].id,
        name: movie[0].title,
        image: movie[0].poster,
        plot: movie[0].plot,
        duration: movie[0].duration,
        year: movie[0].year,
        genres: movie[0].genres,
        showtimes: temp,
      };
    }),
});
