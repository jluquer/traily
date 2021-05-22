import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users?: User[];
  loggedUserId?: number;
  private following: User[] = [];
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loggedUserId = this.authService.getLoggedUserId();
    this.getUsers();
    this.getFollowing();
  }

  private getUsers() {
    this.userService
      .getAll()
      .pipe(
        map((users: User[]) =>
          users.filter((user: User) => user.userId !== this.loggedUserId)
        )
      )
      .subscribe(
        (users) => (this.users = users),
        (_) => this.users = undefined
      );
  }

  private getFollowing() {
    this.userService.getFollowing().subscribe(
      (users) => (this.following = users),
      (err) => console.log(err)
    );
  }

  isFollowing(userId?: number): boolean {
    if (!userId) return false;
    return this.following.filter((user) => user.userId === userId).length > 0;
  }

  follow(userId?: number) {
    if (userId)
      this.userService.follow(userId).subscribe((_) => this.getFollowing());
  }
  unfollow(userId?: number) {
    if (userId)
      this.userService.unfollow(userId).subscribe((_) => this.getFollowing());
  }

  search(data: any): void {
    if (!data || data === []) return this.getUsers();
    this.users = data;
  }
}
