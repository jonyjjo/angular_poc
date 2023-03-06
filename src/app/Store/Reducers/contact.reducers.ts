import { RouterReducerState } from '@ngrx/router-store';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Contact } from '../../Models/contact.model';
import {
  addContact,
  addContactSuccess,
  // assignUser,
  deleteContactSuccess,
  getContactsSuccess,
  updateContactSuccess,
} from '../Actions/contact.actions';

export interface ContactState {
  contacts: ReadonlyArray<Contact>;
  user: Readonly<string>;
  router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<Contact> = [];

export const contactReducer = createReducer(
  initialState,
  on(getContactsSuccess, (state, { contacts }) => [...contacts]),
  on(addContactSuccess, (state, { contact }) => [...state, contact]),
  on(deleteContactSuccess, (state, { contactId }) =>
    state.filter((contact) => contact.id !== contactId)
  ),
  on(updateContactSuccess, (state, { contact }) => {
    const contacts = state.map((m) => {
      if (m.id === contact.id) {
        return contact;
      }
      return m;
    });
    return contacts;
  })
);

// const initialUserSate = '';
// export const userReducer = createReducer(
//   initialUserSate,
//   on(assignUser, (state, { user }) => user)
// );
