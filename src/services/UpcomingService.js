const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ZGVlNDM2MmQ2MDJkMDc3OTYyOTVhNzMiLCJnbG9iYWxhZG1pbiI6ZmFsc2UsImFkbWluIjpmYWxzZSwiYWN0aXZlIjp0cnVlLCJmdWxsbmFtZSI6IlPDs2xyw7puIMOBc3RhIEJqw7ZybnNkw7N0dGlyIiwiZW1haWwiOiJzb2xydW4xOEBydS5pcyIsInVzZXJuYW1lIjoic29scnVuIiwicGFzc3dvcmQiOiIkMmEkMDgkRmZ3WWFoYWFHSTcwSWN5M2NGcUlRdTZldzJERk81b2RkYjY4WXhGMVdtT0d5dUFOenFzdTYiLCJkb21haW4iOiIgaHR0cDovLyBhcGkua3Zpa215bmRpci5pcy8iLCJtZXNzYWdlIjoiUlUgU2Nob29sIHByb2plY3QiLCJpYXQiOjE1NzYyNjAxMjUsImV4cCI6MTU3NjM0NjUyNX0.k04P24tQS32f-D-QkCz_0LlJbeuoLsY5frMFnd0OvsI';
const ENDPOINT = 'http://api.kvikmyndir.is/upcoming';

const UpcomingService = () => ({
  getUpcomingMovies: () => fetch(ENDPOINT, {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  })
    .then((d) => d.json())
    .then((data) => data.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster,
      releaseDate: movie['release-dateIS'],
      trailers: movie.trailers,
    }))),
});

export default UpcomingService();
