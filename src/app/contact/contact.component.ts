import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Contact } from '../Models/contact.model';
import { ContactState } from '../Store/Reducers/contact.reducers';
import { contact } from '../Store/Selector/contact.selector';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact$ = this.store.pipe(select(contact));
  constructor(private store: Store<ContactState>) {}

  ngOnInit(): void {}
}
