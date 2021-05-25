import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Trail from 'src/app/models/trail';
import TrailComment from 'src/app/models/trailComment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommentService } from 'src/app/services/comments/comment.service';
import { TrailService } from 'src/app/services/trails/trail.service';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.scss'],
})
export class TrailComponent implements OnInit {
  trail?: Trail;
  comments?: TrailComment[];
  newComment?: string;
  loggedUserId?: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private trailService: TrailService,
    private commentService: CommentService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const trailId = this.activatedRoute.snapshot.params.trailId;
    this.loggedUserId = this.authService.getLoggedUserId();
    this.trailService
      .getOneById(trailId)
      .subscribe((trail) => (this.trail = trail));

    this.getComments(trailId);
  }

  /**
   * Downloads the file if it exists
   * @param filepath {string}
   */
  download(filepath: string): void {
    this.trailService.download(filepath).subscribe((data) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(data);
      a.href = objectUrl;
      a.download = this.trail?.name + '.gpx';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }

  /**
   * Transforms difficulty from number to string
   * @param difficulty {number}
   * @returns {string}
   */
  getDifficulty(difficulty: number): string {
    let difficultyString = '';
    switch (difficulty) {
      case 1:
        difficultyString = 'Very easy';
        break;
      case 2:
        difficultyString = 'Easy';
        break;
      case 3:
        difficultyString = 'Medium';
        break;
      case 4:
        difficultyString = 'Hard';
        break;
      case 5:
        difficultyString = 'Very hard';
        break;
      default:
        break;
    }
    return difficultyString;
  }

  /**
   * Create a new comment
   * @param form {HTMLFormElement} form to reset comment field
   */
  comment(form: HTMLFormElement): void {
    if (this.trail && this.newComment && this.trail.trailId) {
      const comment = {
        trailId: this.trail.trailId,
        comment: this.newComment,
      };
      this.commentService.createTrailComment(comment).subscribe((_) => {
        this.getComments();
        form.reset();
      });
    }
  }

  /**
   * Delete a comment
   * @param commentId {number}
   */
  deleteComment(commentId: number): void {
    this.commentService.deleteTrailComment(commentId).subscribe(
      (_) => {
        this.getComments();
      },
      () => {}
    );
  }

  /**
   * Get all trail comments 
   * @param trailId {number}
   */
  private getComments(trailId?: number): void {
    const id = this.trail?.trailId || trailId;
    if (id)
      this.commentService
        .getTrailComments(id)
        .subscribe((comments) => (this.comments = comments));
  }
}
