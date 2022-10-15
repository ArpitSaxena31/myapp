import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class LoginadminService {

  private baseurl="http://localhost:8081/admin/login";
  constructor(private httpClient : HttpClient) { }

  loginAdmin(admin:Admin):Observable<object>{
    console.log(admin)
    return this.httpClient.post('${this.baseUrl}',admin);
  }
}
