import { Component, OnInit } from '@angular/core';
import Movie from '../types/movie';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  movies: Movie[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.movieService.getMovies().subscribe((popularMoviesReturn) => {
      this.movies = popularMoviesReturn.results;
    });
  }
}
