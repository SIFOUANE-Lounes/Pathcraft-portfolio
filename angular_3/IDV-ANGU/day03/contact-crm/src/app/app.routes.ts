import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard.page';
import { ContactsListPage } from './pages/contacts-list.page';
import { ContactFormPage } from './pages/contact-form.page';
import { ContactDetailPage } from './pages/contact-detail.page';
import { CategoriesListPage } from './pages/categories-list.page';
import { CategoryFormPage } from './pages/category-form.page';
import { FavoritesPage } from './pages/favorites.page';

export const routes: Routes = [
  { path: '', component: DashboardPage },
  { path: 'contacts', component: ContactsListPage },
  { path: 'contacts/new', component: ContactFormPage },
  { path: 'contacts/:id', component: ContactDetailPage },
  { path: 'contacts/:id/edit', component: ContactFormPage },
  { path: 'categories', component: CategoriesListPage },
  { path: 'categories/new', component: CategoryFormPage },
  { path: 'categories/:id', component: ContactsListPage },
  { path: 'favorites', component: FavoritesPage },
  { path: '**', redirectTo: '' },
  
];
