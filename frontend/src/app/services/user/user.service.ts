import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = environment.host + 'user/';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    return this.http.post(this.userUrl + 'create', user);
  }

  getFollowing(): Observable<any> {
    return this.http.get(this.userUrl + "getFollowing");
  }
}
