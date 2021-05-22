import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { from, fromEvent, of, Subject, Subscription } from 'rxjs';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  map,
  mergeMap,
} from 'rxjs/operators';
import User from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent implements OnDestroy {
  public keyUp = new Subject<KeyboardEvent>();
  @Output() searchEvent = new EventEmitter<User[]>();

  private subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = this.keyUp
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((search) => this.search(search));
  }

  search(search: string) {
    this.searchEvent.emit(undefined);
    this.userService.search(search).subscribe(
      (users) => this.searchEvent.emit(users),
      (_) => this.searchEvent.emit([])
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
