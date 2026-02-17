import { Injectable } from '@angular/core';
import { Contact, Category } from './models';

const CONTACTS_KEY = 'contact-crm-contacts';
const CATEGORIES_KEY = 'contact-crm-categories';

@Injectable({ providedIn: 'root' })
export class DataService {
  private contacts: Contact[] = [];
  private categories: Category[] = [];

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const contactsRaw = localStorage.getItem(CONTACTS_KEY);
    const categoriesRaw = localStorage.getItem(CATEGORIES_KEY);

    this.contacts = contactsRaw ? JSON.parse(contactsRaw) : [];
    this.categories = categoriesRaw ? JSON.parse(categoriesRaw) : [];
  }

  private saveContacts(): void {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.contacts));
  }

  private saveCategories(): void {
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(this.categories));
  }


  getContacts(): Contact[] {
    return [...this.contacts];
  }

  getContactById(id: string): Contact | undefined {
    return this.contacts.find(c => c.id === id);
  }

  addContact(data: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>): Contact {
    const now = new Date().toISOString();
    const contact: Contact = {
      ...data,
      id: this.generateId(),
      createdAt: now,
      updatedAt: now,
    };
    this.contacts.push(contact);
    this.saveContacts();
    return contact;
  }

  updateContact(id: string, changes: Partial<Contact>): Contact | undefined {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index === -1) return undefined;

    const updated: Contact = {
      ...this.contacts[index],
      ...changes,
      updatedAt: new Date().toISOString(),
    };

    this.contacts[index] = updated;
    this.saveContacts();
    return updated;
  }

  deleteContact(id: string): void {
    this.contacts = this.contacts.filter(c => c.id !== id);
    this.saveContacts();
  }

  toggleFavorite(id: string): void {
    const contact = this.getContactById(id);
    if (!contact) return;
    contact.favorite = !contact.favorite;
    contact.updatedAt = new Date().toISOString();
    this.saveContacts();
  }

  getFavoriteContacts(): Contact[] {
    return this.contacts.filter(c => c.favorite);
  }


  getCategories(): Category[] {
    return [...this.categories];
  }

  getCategoryById(id: string): Category | undefined {
    return this.categories.find(c => c.id === id);
  }

  addCategory(data: Omit<Category, 'id' | 'createdAt'>): Category {
    const category: Category = {
      ...data,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
    };
    this.categories.push(category);
    this.saveCategories();
    return category;
  }

  updateCategory(id: string, changes: Partial<Category>): Category | undefined {
    const index = this.categories.findIndex(c => c.id === id);
    if (index === -1) return undefined;

    const updated: Category = {
      ...this.categories[index],
      ...changes,
    };

    this.categories[index] = updated;
    this.saveCategories();
    return updated;
  }

  deleteCategory(id: string): void {
    const hasContacts = this.contacts.some(c => c.categoryId === id);
    if (hasContacts) {
      throw new Error('Cannot delete category with existing contacts');
    }
    this.categories = this.categories.filter(c => c.id !== id);
    this.saveCategories();
  }


  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}
