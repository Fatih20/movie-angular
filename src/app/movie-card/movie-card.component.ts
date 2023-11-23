import { Component, Input, OnInit } from '@angular/core';
import Movie from '../types/movie';
import { environment } from 'src/environments/environment';
import { WishlistService } from '../services/wishlist/wishlist.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  constructor(private wishlistService: WishlistService) {}

  @Input()
  movie?: Movie;

  imageUrl = environment.IMAGE_URL;

  ngOnInit(): void {
    this.imageUrl = `${environment.IMAGE_URL}${this.movie.poster_path}`;
  }

  handleAddToWishlist(event: Event) {
    event.stopPropagation();
    this.wishlistService.add(this.movie);
  }
}
