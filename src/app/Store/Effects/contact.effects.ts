import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, EmptyError } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { DataService } from 'src/app/Service/data.service';
import { ContactService } from 'src/app/Service/contact.service';
import {
  getContacts,
  getContactsSuccess,
  addContact,
  addContactSuccess,
  deleteContact,
  deleteContactSuccess,
  updateContact,
  updateContactSuccess,
} from '../Actions/contact.actions';

@Injectable()
export class ContactEffects {
  loadContact$ = createEffect(() =>
    this.action$.pipe(
      ofType(getContacts),
      exhaustMap(() =>
        this.contactService.getContacts().pipe(
          map((contacts) => getContactsSuccess(contacts)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addContact$ = createEffect(() =>
    this.action$.pipe(
      ofType(addContact),
      tap((contact) => console.log(contact)),
      concatMap(({ contact }) =>
        this.contactService.addContact(contact).pipe(
          map((newContact) => addContactSuccess(newContact)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteContact$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteContact),
      mergeMap(({ contactId }) =>
        this.contactService.deleteContact(contactId).pipe(
          map(() => deleteContactSuccess(contactId)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateContact$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateContact),
      concatMap(({ contact }) =>
        this.contactService.updateContact(contact).pipe(
          map(() => updateContactSuccess(contact)),
          catchError(() => EMPTY)
        )
      )
    )
  );
  ContactService: any;

  constructor(private action$: Actions, private contactService: ContactService) {}
}
