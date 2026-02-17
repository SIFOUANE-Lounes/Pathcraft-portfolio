import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Contact, Category } from '../models';

@Component({
  standalone: true,
  selector: 'app-contacts-list',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contacts-list.page.html',
})
export class ContactsListPage implements OnInit {
  contacts: Contact[] = [];
  categories: Category[] = [];

  searchTerm = '';
  selectedCategoryId = 'all';
  showFavoritesOnly = false;
  sortKey: 'name-asc' | 'name-desc' | 'date-newest' | 'date-oldest' = 'name-asc';

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.categories = this.dataService.getCategories();
    this.loadContacts();
  }

  loadContacts(): void {
    const all = this.dataService.getContacts();
    this.contacts = this.applyFiltersAndSort(all);
  }

  applyFiltersAndSort(list: Contact[]): Contact[] {
    let result = [...list];

    if (this.searchTerm) {
      const lower = this.searchTerm.toLowerCase();
      result = result.filter((c) =>
        `${c.firstName} ${c.lastName}`.toLowerCase().includes(lower),
      );
    }

    if (this.selectedCategoryId !== 'all') {
      result = result.filter((c) => c.categoryId === this.selectedCategoryId);
    }


    if (this.showFavoritesOnly) {
      result = result.filter((c) => c.favorite);
    }

    switch (this.sortKey) {
      case 'name-asc':
        result.sort((a, b) =>
          a.lastName.localeCompare(b.lastName) ||
          a.firstName.localeCompare(b.firstName),
        );
        break;
      case 'name-desc':
        result.sort((a, b) =>
          b.lastName.localeCompare(a.lastName) ||
          b.firstName.localeCompare(a.firstName),
        );
        break;
      case 'date-newest':
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        break;
      case 'date-oldest':
        result.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        );
        break;
    }

    return result;
  }

  onFiltersChange(): void {
    this.loadContacts();
  }

  onToggleFavorite(contact: Contact): void {
    this.dataService.toggleFavorite(contact.id);
    this.loadContacts();
  }

  onDelete(contact: Contact): void {
    const ok = confirm(
      `Delete contact ${contact.firstName} ${contact.lastName} ?`,
    );
    if (!ok) return;
    this.dataService.deleteContact(contact.id);
    this.loadContacts();
  }

  goToDetail(contact: Contact): void {
    this.router.navigate(['/contacts', contact.id]);
  }

  goToCreate(): void {
    this.router.navigate(['/contacts/new']);
  }
}
