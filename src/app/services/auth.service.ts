import { Injectable } from '@angular/core';
import {UserDto} from "../dto/user.dto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.baseUrl+'/login'

//   register(data: UserProfile): Observable<> {
//     return this.http.post(this.url, data)
//   }
//   constructor( private http: HttpClient) { }
}
