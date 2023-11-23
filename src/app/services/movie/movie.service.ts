import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import Movie from 'src/app/types/movie';
import { HttpClient } from '@angular/common/http';

type GetReturnObject = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getMovies() {
    return this.httpClient.get<GetReturnObject>(
      `${environment.API_ENDPOINT}/movie/popular?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${environment.API_KEY_READ}`,
        },
      }
    );
  }

  getMovie(id: number) {
    return this.httpClient.get<Movie>(
      `${environment.API_ENDPOINT}/movie/${id}`,
      {
        headers: {
          Authorization: `Bearer ${environment.API_KEY_READ}`,
        },
      }
    );
  }
}
