import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activityUrl = environment.host + "activity/"
  constructor(private http: HttpClient) { }

  /**
   * Get all activities from database
   * 
   * @returns {Observable<any>}
   */
  getAll(): Observable<any> {
    return this.http.get(this.activityUrl + "getAll")
  }
}
