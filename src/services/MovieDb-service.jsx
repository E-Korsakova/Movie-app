export default class SwapiService {
  apiBase = 'https://api.themoviedb.org/3/search';

  async getResource(url) {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`not fetch ${url}`);
    }

    const body = await res.json();
    return body;
  }

  async getAllMovies() {
    const res = await this.getResource('/movie/');
    return res.results;
  }

  getMovie(title) {
    return this.getResource(`/movie/${title}/`);
  }
}
