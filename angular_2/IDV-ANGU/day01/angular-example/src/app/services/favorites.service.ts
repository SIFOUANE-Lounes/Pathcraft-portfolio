import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {
  private fav = false;

  toggle() {
    this.fav = !this.fav;
  }

  isFavorite() {
    return this.fav;
  }
}
