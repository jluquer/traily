import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Trail from 'src/app/models/trail';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TrailService {
  private trailUrl = environment.host + 'trail/';
  constructor(private http: HttpClient, private authService: AuthService) {}

  /**
   * Get all trails from the users you are following ordered by date. If you don't
   * follow any user it will return an empty array.
   *
   * @returns {Observable<any>}
   */
  getDashboardTrails(): Observable<any> {
    return this.http.get(this.trailUrl + this.getDashboardTrails.name).pipe(
      map((trails: any) =>
        trails.sort((a: any, b: any) => {
          return +new Date(b.createdAt) - +new Date(a.createdAt);
        })
      )
    );
  }

  /**
   *  Get all trails from a user. If no userId is provided it will default
   * to the logged user id.
   *
   * @param {number} userId user id
   * @returns {Observable<any>}
   */

  getAllByUserId(userId?: number): Observable<any> {
    if (!userId) userId = this.authService.getLoggedUserId();
    return this.http.get(this.trailUrl + this.getAllByUserId.name, {
      headers: {
        userId: `${userId}`,
      },
    });
  }

  /**
   * Get all trails stored in database ordered by date. Older trails will be
   * at the end of the array.
   *
   * @returns {Observable<any>}
   */
  getAllTrails(): Observable<any> {
    return this.http.get(this.trailUrl + 'getAll').pipe(
      map((trails: any) =>
        trails.sort((a: any, b: any) => {
          return +new Date(b.createdAt) - +new Date(a.createdAt);
        })
      )
    );
  }

  /**
   * Get a trail from database by trailId
   *
   * @param id {number}
   * @returns {Observable<any>}
   */
  getOneById(id: number): Observable<any> {
    const trailId = String(id);
    return this.http.get(this.trailUrl + this.getOneById.name, {
      headers: { id: trailId },
    });
  }

  /**
   * Create a new trail
   *
   * @param trail {Trail}
   * @returns {Observable<any>}
   */
  create(trail: Trail): Observable<any> {
    return this.http.post(this.trailUrl + 'create', trail);
  }

  /**
   * Update a trail
   *
   * @param trail {Trail}
   * @returns
   */
  update(trail: Trail): Observable<any> {
    return this.http.put(this.trailUrl + 'update', trail, {
      headers: { id: String(trail.trailId) },
    });
  }

  /**
   * Uploads a file to the server.
   *
   * @param file {File}
   * @returns {Observable<any>}
   */
  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file0', file);
    return this.http.post(this.trailUrl + 'upload', formData);
  }

  /**
   * Delete a trail
   *
   * @param trailId {number}
   * @returns {Observable<any>}
   */
  delete(trailId: number): Observable<any> {
    return this.http.delete(this.trailUrl + 'delete', {
      headers: {
        id: String(trailId),
      },
    });
  }

  /**
   * Downloads the trail file
   * 
   * @param filepath {string} trail track filepath
   * @returns {Observable<any>}
   */
  download(filepath: string): Observable<any> {
    return this.http.get(this.trailUrl + 'getTrackFile', { headers: { filepath }, responseType: "blob" });
  }
}
