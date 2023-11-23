import { Component, OnInit } from '@angular/core';
import Movie from '../types/movie';
import { MovieService } from '../services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  movie: Movie;
  loading = true;

  imageUrl = environment.IMAGE_URL;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getMovie(id);
  }

  getMovie(id: number) {
    this.movieService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
      setTimeout(() => {
        this.loading = false;
      }, 500);
      this.imageUrl = `${environment.IMAGE_URL}${this.movie.poster_path}`;
    });
  }
}
