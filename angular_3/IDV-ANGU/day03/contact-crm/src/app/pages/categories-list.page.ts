import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Category, Contact } from '../models';

@Component({
  standalone: true,
  selector: 'app-categories-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './categories-list.page.html',
})
export class CategoriesListPage implements OnInit {
  categories: Category[] = [];
  contacts: Contact[] = [];
  errorMessage = '';

  constructor(
    private readonly dataService: DataService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.categories = this.dataService.getCategories();
    this.contacts = this.dataService.getContacts();
    this.errorMessage = '';
  }

  getContactCountForCategory(categoryId: string): number {
    return this.contacts.filter((c) => c.categoryId === categoryId).length;
  }

  goToCreate(): void {
    this.router.navigate(['/categories/new']);
  }

  deleteCategory(category: Category): void {
    const count = this.getContactCountForCategory(category.id);
    if (count > 0) {
      this.errorMessage = `Cannot delete category "${category.name}" because it has ${count} contact(s).`;
      return;
    }

    const ok = confirm(`Delete category "${category.name}" ?`);
    if (!ok) return;

    this.dataService.deleteCategory(category.id);
    this.loadData();
  }
}
