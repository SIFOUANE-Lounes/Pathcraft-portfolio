import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
  declarations: [ContactCardComponent],
  imports: [CommonModule],
  exports: [ContactCardComponent]
})
export class ContactsModule { }
