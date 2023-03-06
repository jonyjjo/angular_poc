import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from './Models/contact.model';
import { DataService } from './Service/data.service';
import { ContactService } from './Service/contact.service';
import {
  addContact,
  assignUser,
  getContacts,
  logout,
} from './Store/Actions/contact.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  contacts: Contact[] = [];
  newContact: Contact = new Contact();
  title = 'contactApp';
  constructor(
    private store: Store,
    private contactService: ContactService,
    ) {}

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(): void {
    this.store.dispatch(getContacts());
    this.store.dispatch(assignUser('Subrat'));
    // this.contactService.getContacts().subscribe((contacts: Contact[]) => {
    //   this.contacts = contacts;
    // });
  }

  addNewContact(): void {
    this.store.dispatch(addContact(this.newContact));
    this.newContact = new Contact();
    // this.contactService.addContacts(this.newContact).subscribe((res) => {
    //   this.getAllContacts();
    //   this.newContact = new Contact();
    // });
  }

  changeUser(): void {
    this.store.dispatch(assignUser('devUser'));
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}