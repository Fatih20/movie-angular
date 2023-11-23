import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import Movie from 'src/app/types/movie';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor() {
    const wishlist = JSON.parse(localStorage.getItem('Wishlist'));
    if (wishlist) {
      this.wishlist = wishlist;
    }

    this.wishlistChange$.subscribe((data) =>
      localStorage.setItem('Wishlist', JSON.stringify(this.wishlist))
    );
  }

  wishlist: Movie[] = [];
  wishlistChange$ = new Subject<Movie[]>();

  get() {
    return of(this.wishlist);
  }

  remove(removedId: number) {
    this.wishlist = this.wishlist.filter(({ id }) => id !== removedId);
    this.wishlistChange$.next(this.wishlist);
  }

  add(addedMovie: Movie) {
    if (this.wishlist.findIndex((movie) => movie.id === addedMovie.id) < 0) {
      this.wishlist.push(addedMovie);
      this.wishlistChange$.next(this.wishlist);
      return;
    }
  }
}
