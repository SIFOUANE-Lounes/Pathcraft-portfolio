import { Component } from '@angular/core';
import { ContactsService, Contact } from '../../../services/contacts.service';
import { StatsService } from '../../../services/stats.service';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
  providers: [FavoritesService]
})
export class ContactCardComponent {
  contact!: Contact;

  constructor(
    private contacts: ContactsService,
    public stats: StatsService,
    public fav: FavoritesService
  ) {
    this.contact = this.contacts.getAll()[0];
    console.log('Instance StatsService:', this.stats.instanceId);
  }

  seeDetails() {
    this.stats.addClick();
  }

  toggleFavorite() {
    this.fav.toggle();
  }
}
