import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from '../Models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      contacts: this.mockContact(),
    };
  }

  private mockContact(): Contact[] {
    const contact1 = new Contact(
      'Ryan Blake',
      '12 Street Name, Gotham City',
      new Date('1 Jan, 2001 01:00:00'),
      '+639123456789'
    );
    contact1.id = 1;

    const contact2 = new Contact(
      'Kendra Mahoney',
      '23 Street Name, Gotham City',
      new Date('2 Feb, 2001 01:00:00'),
      '+639234567890'
    );
    contact2.id = 2;

    const contact3 = new Contact(
      'Anthony Stevens',
      '34 Street Name, Gotham City',
      new Date('3 Mar, 2001 01:00:00'),
      '+639345678901'
    );
    contact3.id = 3;

    const contacts = [contact1, contact2, contact3];
    return contacts;
  }
}
