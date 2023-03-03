import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from '../Models/contact.model';
import {
  addContact,
  getContacts,
} from '../Store/Actions/contact.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  contacts: Contact[] = [];
  newContact: Contact = new Contact();
  title = 'contactApp';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(): void {
    this.store.dispatch(getContacts());
    // this.store.dispatch(assignUser('Subrat'));
    // this.dataService.getContacts().subscribe((contacts: Contact[]) => {
    //   this.contacts = contacts;
    // });
  }

  addNewContacts(): void {
    this.store.dispatch(addContact(this.newContact));
    this.newContact = new Contact();
    // this.dataService.addContact(this.newContact).subscribe((res) => {
    //   this.getAllContacts();
    //   this.newContact = new Contact();
    // });
  }

//   changeUser(): void {
//     this.store.dispatch(assignUser('Sanjit'));
//   }

//   logout(): void {
//     this.store.dispatch(logout());
//   }
}
