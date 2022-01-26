import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  login(user:User):Observable<any> {
   return this.httpClient.post<any>('URL API POST ',user);
  }
}


interface User {
  email:string;
  password:string;
}