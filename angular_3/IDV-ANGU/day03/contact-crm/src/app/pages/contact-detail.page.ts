import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Contact, Category } from '../models';

@Component({
  standalone: true,
  selector: 'app-contact-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-detail.page.html',
})
export class ContactDetailPage implements OnInit {
  contact: Contact | null = null;
  category: Category | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.contact = this.dataService.getContactById(id) ?? null;

    if (this.contact?.categoryId) {
      this.category =
        this.dataService
          .getCategories()
          .find((c) => c.id === this.contact!.categoryId) ?? null;
    }
  }

  delete(): void {
    if (!this.contact) return;
    const ok = confirm(
      `Delete ${this.contact.firstName} ${this.contact.lastName} ?`,
    );
    if (!ok) return;

    this.dataService.deleteContact(this.contact.id);
    this.router.navigate(['/contacts']);
  }

  edit(): void {
    if (!this.contact) return;
    this.router.navigate(['/contacts', this.contact.id, 'edit']);
  }
}
