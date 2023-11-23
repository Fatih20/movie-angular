import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist/wishlist.service';
import Movie from '../types/movie';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  constructor(private wishlistService: WishlistService) {}

  wishlist: Movie[] = [];

  ngOnInit(): void {
    this.getWishlist();
    this.wishlistService.wishlistChange$.subscribe(
      (wishlist) => (this.wishlist = wishlist)
    );
  }

  getWishlist() {
    this.wishlistService
      .get()
      .subscribe((wishlist) => (this.wishlist = wishlist));
  }

  removeWishlist(id: number) {
    this.wishlistService.remove(id);
  }

  addWishlist(movie: Movie) {
    this.wishlistService.add(movie);
  }
}
