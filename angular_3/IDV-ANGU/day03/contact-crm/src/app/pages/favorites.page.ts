import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Contact } from '../models';

@Component({
  standalone: true,
  selector: 'app-favorites',
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.page.html',
})
export class FavoritesPage implements OnInit {
  favorites: Contact[] = [];

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.dataService.getFavoriteContacts();
  }

  goToDetail(contact: Contact): void {
    this.router.navigate(['/contacts', contact.id]);
  }
}
