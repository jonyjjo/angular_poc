import { createAction, props } from '@ngrx/store';
import { Contact } from '../../Models/contact.model';

export const getContacts = createAction('[Contact] Get contact');
export const getContactsSuccess = createAction(
  '[Contact] Get contact success',
  (contacts: ReadonlyArray<Contact>) => ({ contacts })
  // props<{ contacts: ReadonlyArray<Contact> }>()
);
export const addContact = createAction(
  '[Contact] Add contact',
  (contact: Contact) => ({ contact })
  // props<{ contact: Contact }>()
);
export const addContactSuccess = createAction(
  '[Contact] Add contact success',
  // props<{ contact: Contact }>(),
  (contact: Contact) => ({ contact })
);

export const assignUser = createAction(
  '[User] assign user',
  (user: string) => ({ user })
);

export const deleteContact = createAction(
  '[Contact] Delete contact',
  (contactId: number) => ({ contactId })
);

export const deleteContactSuccess = createAction(
  '[Contact] Delete contact success',
  (contactId: number) => ({ contactId })
);

export const updateContact = createAction(
  '[Contact] Update contact',
  (contact: Contact) => ({ contact })
);

export const updateContactSuccess = createAction(
  '[Contact] Update contact success',
  (contact: Contact) => ({ contact })
);

export const logout = createAction('[User] logout');
