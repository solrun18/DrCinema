const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVlNDM2MmQ2MDJkMDc3OTYyOTVhNzMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IlPDs2xyw7puIMOBc3RhIEJqw7ZybnNkw7N0dGlyIiwiZW1haWwiOiJzb2xydW4xOEBydS5pcyIsInVzZXJuYW1lIjoic29scnVuIiwicGFzc3dvcmQiOiIkMmEkMDgkRmZ3WWFoYWFHSTcwSWN5M2NGcUlRdTZldzJERk81b2RkYjY4WXhGMVdtT0d5dUFOenFzdTYiLCJkb21haW4iOiIgaHR0cDovLyBhcGkua3Zpa215bmRpci5pcy8iLCJtZXNzYWdlIjoiUlUgU2Nob29sIHByb2plY3QiLCJpYXQiOjE1NzYxNDk4NDksImV4cCI6MTU3NjIzNjI0OX0.pnH5_L9vqRSQuSPmCqVGE0jpieMn7vtyZzlHJr35fd8';
const CINEMAENDPOINT = 'http://api.kvikmyndir.is/theaters';
const MOVIEENDPOINT = 'http://api.kvikmyndir.is/movies';
const fetch = require('node-fetch');

export const GetAllCinemas = () => ({
  getCinemas: () => fetch(CINEMAENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  })
    .then((d) => d.json())
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
// Movies in certain cinemas
export const GetMoviesByCinemaId = (cinemaId) => ({
  getMovies: () => fetch(MOVIEENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  })
    .then((d) => d.json())
    .then((movies) => {
      let temp = [];
      for (let x = 0; x < movies.length; x += 1) {
        for (let y = 0; y < movies[x].showtimes.length; y += 1) {
          if (movies[x].showtimes[y].cinema.id === cinemaId) {
            temp.push({
              id: movies[x].id,
              name: movies[x].title,
              image: movies[x].poster,
              releaseYear: movies[x].year,
              genres: movies[x].genres,
              duration: movies[x].durationMinutes,
              plot: movies[x].plot,
              showtimes: movies[x].showtimes[y],
            })
          }
        }
      }
      return temp;
    })
});
