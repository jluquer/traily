import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import TrailComment from 'src/app/models/trailComment';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private commentUrl = environment.host + 'comment/';
  private trailCommentUrl = this.commentUrl + 'trail/';
  constructor(private http: HttpClient, private authService: AuthService) {}

  /**
   * Get all trail comments
   *
   * @param trailId {number}
   * @returns {Observable<any>}
   */
  getTrailComments(trailId: number): Observable<any> {
    return this.http.get(this.trailCommentUrl + 'getAllByTrailId', {
      headers: { trailId: String(trailId) },
    });
  }

  /**
   * Create a trail comment
   *
   * @param trailId {number}
   * @param trailComment {TrailComment}
   * @returns {Observable<any>}
   */
  createTrailComment(trailComment: TrailComment): Observable<any> {
    return this.http.post(this.trailCommentUrl + 'create', trailComment);
  }

  /**
   * Updates a trail comment
   *
   * @param trailId {number}
   * @param trailComment {TrailComment}
   * @returns {Observable<any>}
   */
  updateTrailComment(
    trailCommentId: number,
    trailComment: TrailComment
  ): Observable<any> {
    return this.http.put(this.trailCommentUrl + 'update', trailComment, {
      headers: { trailCommentId: String(trailCommentId) },
    });
  }

  /**
   * Delete a trail comment
   *
   * @param trailId {number}
   * @returns {Observable<any>}
   */
  deleteTrailComment(trailId: number): Observable<any> {
    const userId = this.authService.getLoggedUserId();
    return this.http.delete(this.trailCommentUrl + 'delete', {
      headers: { trailCommentId: String(trailId), userId: String(userId) },
    });
  }
}
