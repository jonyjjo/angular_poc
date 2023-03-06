import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  INIT,
  MetaReducer,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { logout } from './Actions/contact.actions';
import {
  contactReducer,
  ContactState,
  userReducer,
} from './Reducers/contact.reducers';

export const reducers: ActionReducerMap<ContactState> = {
  contacts: contactReducer,
  user: userReducer,
  router: routerReducer
};

const debugMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
};

const logoutMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action?.type === logout.type) {
      return reducer(undefined, { type: INIT });
    }
    return reducer(state, action);
  };
};

export const metaReducers: MetaReducer<ContactState>[] = environment.production
  ? [logoutMeta]
  : [debugMeta, logoutMeta];
