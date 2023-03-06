import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Contact } from '../../Models/contact.model';
import { DataService } from '../../Service/data.service';
import { deleteContact, updateContact } from '../../Store/Actions/contact.actions';
import { ContactState } from '../../Store/Reducers/contact.reducers';
import {
  // greater,
  contactSelector,
  contactUserSelector,
} from '../../Store/Selector/contact.selector';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts$ = this.store.pipe(select(contactUserSelector));
  contacts: Contact[] | undefined;
  done = new Subject();
  selectedIndex: number = 0;
  contactNo = 0;
  constructor(private store: Store<ContactState>) {}

  ngOnInit(): void {
    this.contacts$
      .pipe(takeUntil(this.done))
      .subscribe((data) => (this.contacts = JSON.parse(JSON.stringify(data))));
    // setTimeout(() => {
    //   this.contacts$ = this.store.pipe(select(greater(2000)));
    // }, 5000);
  }

  enableEdit(contact: Contact, index: number): void {
    this.selectedIndex = index;
    // this.earning = contact.earning;
  }

  cancelEdit(): void {
    this.selectedIndex = 0;
  }

  // update the earning from the input then dispatch update action
  update(contact: Contact): void {
    const m = { ...contact };
    // m.earning = this.earning;
    // dispatch action to update
    this.store.dispatch(updateContact(m));
    this.selectedIndex = 0;
  }

  deleteContact(contactId: number): void {
    this.store.dispatch(deleteContact(contactId));
  }

  ngOnDestroy(): void {
    // this.done.next();
    this.done.complete();
  }
}
