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

  /**
   * 
   * @param user 
   * @returns 
   */
  createUser(user: User): Observable<any> {
    return this.http.post(this.userUrl + 'create', user);
  }

  /**
   * Get all users from database.
   *
   * @returns observable with users.
   */
  getAll(): Observable<any> {
    return this.http.get(this.userUrl + 'getAll');
  }

  /**
   * Get one user by user id.
   * 
   * @param userId user id who you are looking for.
   * @returns observable with user.
   */
  getOneById(userId: number): Observable<any> {
    return this.http.get(this.userUrl + this.getOneById.name, {
      headers: {
        id: '' + userId,
      },
    });
  }

  /**
   * Get all the users that the logged user is following.
   * 
   * @returns observable with users.
   */
  getFollowing(): Observable<any> {
    return this.http.get(this.userUrl + 'getFollowing');
  }

  /**
   * Get all the users who follow the logged user.
   * 
   * @returns observable with users.
   */
  getFollowers(): Observable<any> {
    return this.http.get(this.userUrl + 'getFollowers');
  }

  /**
   * Follow a user
   *
   * @param userId User id who you are going to follow
   * @returns observable with response from backend.
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
   * @param userId User id who you are going to unfollow
   * @returns observable with response from backend.
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
   * @param name user name to be searched
   * @returns observable with response from backend.
   */
  search(name: string): Observable<any> {
    return this.http.get(this.userUrl + 'search', {
      headers: {
        name,
      },
    });
  }
}
