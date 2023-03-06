import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Contact } from 'src/app/Models/contact.model';
import { ContactState } from '../Reducers/contact.reducers';

export const contactSelector = createSelector(
  (state: ContactState) => state.contacts,
  (contacts: ReadonlyArray<Contact>) => contacts
);

export const contactUserSelector = createSelector(
  (state: ContactState) => state.contacts,
  (state: ContactState) => state.user,
  (contacts: ReadonlyArray<Contact>, user: Readonly<string>) => {
    return contacts.filter((contact: Contact) => contact.userName === user);
  }
);

// export const greater = (amount: number) =>
//   createSelector(contactSelector, (contacts) => {
//     return contacts.filter((contact: Contact) => contact.earning >= amount);
//   });

const routeParams = createSelector(
  (state: ContactState) => state.router.state,
  (state) => state.params
);

const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors(selectRouter);

export const contact = createSelector(
  contactSelector,
  routeParams,
  // selectRouteParams,
  (contacts: ReadonlyArray<Contact>, { id }) => {
    return contacts.filter((m) => m.id === Number(id))[0];
  }
);
