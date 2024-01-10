export default class SwapiService {
  apiBase = 'https://api.themoviedb.org/3/search/movie';

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjcyNjhlNjQ2YjgxZTU0MDczNzkzODM5N2JjN2FiNCIsInN1YiI6IjY1OWQxMmM5YzQ5MDQ4MDI1OGFlNjZkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VIB5h_5UJ_IOlINCwgS3Rb_5NfD1w_5KnczOva2QvFo',
    },
  };

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`, this.options);

    if (!res.ok) {
      throw new Error(`not fetch ${url}`);
    }

    const body = await res.json();
    return body;
  }

  getMovie(title) {
    return this.getResource(`?query=${title}`);
  }
}
