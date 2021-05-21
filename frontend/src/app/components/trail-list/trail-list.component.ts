import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Trail from 'src/app/models/trail';
import { AlertService } from 'src/app/services/alerts/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TrailService } from 'src/app/services/trails/trail.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-trail-list',
  templateUrl: './trail-list.component.html',
  styleUrls: ['./trail-list.component.scss'],
})
export class TrailListComponent implements OnInit {
  @Input() trails: Trail[] = [];
  @Output() trailDeleted = new EventEmitter<boolean>();
  username?: string;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private trailService: TrailService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getLoggedUserId();
    if (userId)
      this.userService.getOneById(userId).subscribe(
        (user) => {
          this.username = user.name;
        },
        (err) => console.log(err)
      );
  }

  deleteTrail(trailId: number) {
    this.alertService
      .custom({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      .subscribe((data) => {
        if (data.isConfirmed)
          this.trailService.delete(trailId).subscribe(
            (deleted) => {
              console.log(deleted);
              this.alertService.success().subscribe(() => {
                this.trailDeleted.emit(true);
              });
            },
            (err) => this.alertService.error()
          );
      });
  }
}
