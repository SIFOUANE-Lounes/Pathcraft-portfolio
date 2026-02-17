import { Injectable } from '@angular/core';

export type Contact = { id: number; name: string; role: string; email: string };

@Injectable({ providedIn: 'root' })
export class ContactsService {
  private contacts: Contact[] = [
    { id: 1, name: 'Jane Doe',  role: 'Développeuse Front-End', email: 'jane@code2work.com' },
    { id: 2, name: 'John Smith', role: 'Chef de projet',        email: 'john@code2work.com' },
  ];

  getAll(): Contact[] {
    return this.contacts;
  }

  
  getMessage(): string {
    return 'Service Contacts prêt';
  }
}
