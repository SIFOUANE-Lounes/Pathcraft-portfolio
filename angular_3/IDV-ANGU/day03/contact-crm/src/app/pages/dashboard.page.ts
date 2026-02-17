import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {
  totalContacts = 0;
  totalFavorites = 0;
  totalCategories = 0;

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    const contacts = this.dataService.getContacts();
    const categories = this.dataService.getCategories();

    this.totalContacts = contacts.length;
    this.totalFavorites = contacts.filter(c => c.favorite).length;
    this.totalCategories = categories.length;
  }
}
