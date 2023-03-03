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
        this.dataService.getContacts().pipe(
          map((contacts) => getContactsSuccess(contacts)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addContact$ = createEffect(() =>
    this.action$.pipe(
      ofType(addContacts),
      tap((contact) => console.log(contact)),
      concatMap(({ contact }) =>
        this.dataService.addContacts(contact).pipe(
          map((newContact) => addContactsSuccess(newContact)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteContact$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteContact),
      mergeMap(({ contactId }) =>
        this.dataService.deleteContact(contactId).pipe(
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
        this.dataService.updateContacts(contact).pipe(
          map(() => updateContactSuccess(contact)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}
