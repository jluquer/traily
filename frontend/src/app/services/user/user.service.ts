import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  /**
   * Get all users from database
   *
   * @returns {Observable<any>}
   */
  getAll(): Observable<any> {
    return this.http.get(this.userUrl + 'getAll');
  }

  getOneById(userId: number): Observable<any> {
    return this.http.get(this.userUrl + this.getOneById.name, {
      headers: {
        id: '' + userId,
      },
    });
  }

  getFollowing(): Observable<any> {
    return this.http.get(this.userUrl + 'getFollowing');
  }

  getFollowers(): Observable<any> {
    return this.http.get(this.userUrl + 'getFollowers');
  }

  /**
   * Follow a user
   *
   * @param userId {number} User id you are going to follow
   * @returns {Observable<any>}
   */
  follow(userId: number): Observable<any> {
    return this.http.post(
      this.userUrl + 'follow',
      {},
      {
        headers: {
          id: String(userId),
        },
      }
    );
  }

  /**
   * Unfollow a user
   *
   * @param userId {number} User id you are going to unfollow
   * @returns {Observable<any>}
   */
  unfollow(userId: number): Observable<any> {
    return this.http.delete(this.userUrl + 'unfollow', {
      headers: {
        id: String(userId),
      },
    });
  }

  /**
   * Search users by their name
   * 
   * @param name {string}
   * @returns {Observable<any>}
   */
  search(name: string): Observable<any> {
    return this.http.get(this.userUrl + 'search', {
      headers: {
        name,
      },
    });
  }
}
