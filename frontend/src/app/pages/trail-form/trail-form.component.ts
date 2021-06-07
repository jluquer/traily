import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TrailService } from 'src/app/services/trails/trail.service';
import Trail from 'src/app/models/trail';
import { FormGroup } from '@angular/forms';
import Activity from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-trail-form',
  templateUrl: './trail-form.component.html',
  styleUrls: ['./trail-form.component.scss'],
})
export class TrailFormComponent implements OnInit {
  @ViewChild('trailForm') trailForm?: FormGroup;
  trail: Trail = {
    trailId: undefined,
    name: '',
    description: '',
    distance: null,
    elevGain: null,
    difficulty: null,
    country: '',
    province: '',
    city: '',
    activityId: 0,
    userId: 0,
    elevMax: null,
    elevMin: null,
    trailFilepath: null,
    createdAt: undefined,
    user: undefined,
    activity: undefined,
  };
  edit = false;
  activities?: Array<Activity>;
  submitted = false;

  constructor(
    private trailService: TrailService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private activityService: ActivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const trailId = this.activatedRoute.snapshot.params.trailId;
    const userId = this.authService.getLoggedUserId();
    if (trailId)
      this.trailService.getOneById(trailId).subscribe(
        (trail) => {
          this.trail = trail;
          this.edit = true;
        },
        (err) => {
          console.log(err);
        }
      );

    if (userId) this.trail.userId = userId;

    this.activityService.getAll().subscribe((activities) => {
      this.activities = activities;
    });
  }

  /**
   * When the user submits the login form it will check if inputs 
   * are correct, and if they are correct then it will send the 
   * petition to create or update the trail to the backend.
   */
  onSubmit() {
    this.submitted = true;

    if (this.trailForm?.valid) {
      if (this.edit) {
        this.updateTrail();
      } else {
        this.createTrail();
      }
    }
  }

  /**
   * Updates the trail and if there is not any error it will
   * redirect to trails route.
   */
  updateTrail(): void {
    this.trailService.update(this.trail).subscribe(
      (res) => {
        this.router.navigate(["/trails"])
      },
      (err) => console.log(err)
    );
  }

  /**
   * Create the trail and if there is not any error it will
   * redirect to trails route.
   */
  createTrail(): void {
    this.trailService.create(this.trail).subscribe(
      (res) => {
        this.router.navigate(["/trails"])
      },
      (err) => console.log(err)
    );
  }

  /**
   * Set the trail filepath returned from server when the gpx
   * file is uploaded to the storage.
   * 
   * @param filepath filepath from file uploaded.
   */
  setFilePath(filepath: string): void {
    this.trail.trailFilepath = filepath;
  }
}
