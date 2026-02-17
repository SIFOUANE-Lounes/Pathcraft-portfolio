import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  standalone: true,
  selector: 'app-category-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './category-form.page.html',
})
export class CategoryFormPage {
  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly dataService: DataService,
    private readonly router: Router,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      color: ['#000000', Validators.required],
    });
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

    this.dataService.addCategory({
      name: value.name,
      color: value.color,
    });

    this.router.navigate(['/categories']);
  }
}
