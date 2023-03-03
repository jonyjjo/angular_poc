import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './home/contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModules } from './app.material.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './Service/data.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { contactReducer } from './Store/Reducers/contact.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './Store/Effects/contact.effects';
import { reducers, metaReducers } from './Store/reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { RouterSerializer } from './Store/routerSerializer';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // MaterialModules,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
      metaReducers,
    }),
    EffectsModule.forRoot([ContactEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}