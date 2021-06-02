import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Trail from 'src/app/models/trail';
import User from 'src/app/models/user';
import { TrailService } from 'src/app/services/trails/trail.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user?: User;
  trails?: Trail[];
  userId?: number;
  followers?: User[];
  following?: User[];

  constructor(
    private trailService: TrailService,
    private userService: UserService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.activeRoute.snapshot.params.userId;
    this.userService.getFollowing().subscribe((following) => {
      this.following = following;
    });

    this.userService.getFollowers().subscribe((followers) => {
      this.followers = followers;
    });

    this.userService.getOneById(this.userId ?? 0).subscribe(
      (user) => (this.user = user),
      () => {}
    );

    this.getTrails();
  }

  /**
   * Set the trails to the trails returned of the back.
   */
  getTrails(): void {
    this.trailService.getAllByUserId(this.userId).subscribe(
      (trails) => (this.trails = trails),
      () => {}
    );
  }
}
