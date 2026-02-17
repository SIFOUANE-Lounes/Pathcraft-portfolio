import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { Category, Contact } from '../models';

@Component({
  standalone: true,
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact-form.page.html',
})
export class ContactFormPage implements OnInit {
  form!: FormGroup;
  categories: Category[] = [];
  contactId: string | null = null;
  isEditMode = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dataService: DataService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.categories = this.dataService.getCategories();
    this.contactId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.contactId;

    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+ ]{6,}$/)]],
      company: ['', Validators.required],
      jobTitle: ['', Validators.required],
      categoryId: [null],
      favorite: [false],
      notes: [''],
    });

    if (this.isEditMode && this.contactId) {
      const contact = this.dataService.getContactById(this.contactId);
      if (contact) {
        this.form.patchValue(contact);
      }
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.value;

    if (this.isEditMode && this.contactId) {
      this.dataService.updateContact(this.contactId, value);
    } else {
      this.dataService.addContact(
        value as Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>,
      );
    }

    this.router.navigate(['/contacts']);
  }
}
