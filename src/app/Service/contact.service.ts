import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Contact } from '../Models/contact.model';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = 'api/contact/';
  constructor(private http: HttpClient) {}

  getContacts(): Observable<ReadonlyArray<Contact>> {
    return this.http.get<ReadonlyArray<Contact>>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.url, contact).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteContact(contactId: number) {
    return this.http.delete(`${this.url}/${contactId}`).pipe(
      delay(1000),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.url}/${contact.id}`, contact).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
