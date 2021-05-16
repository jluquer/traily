import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import User from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class TrailService {
  private trailUrl = environment.host + 'trail/';
  constructor(private http: HttpClient) {}

  getDashboardTrails() {
    return this.http.get(this.trailUrl + this.getDashboardTrails.name).pipe(
      map((trails: any) =>
        trails.sort((a: any, b: any) => {
          return +new Date(b.createdAt) - +new Date(a.createdAt);
        })
      )
    );
  }

  getAllTrailsByUserId(userId: number): Observable<any> {
    return this.http.get(this.trailUrl + this.getAllTrailsByUserId.name, {
      headers: {
        userId: `${userId}`,
      },
    });
  }
}
