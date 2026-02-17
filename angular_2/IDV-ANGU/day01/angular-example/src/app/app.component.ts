import { Component } from '@angular/core';
import { ContactsService } from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example';
  message = '';

  constructor(private contactService: ContactsService) {
    this.message = this.contactService.getMessage(); 
  }
}
