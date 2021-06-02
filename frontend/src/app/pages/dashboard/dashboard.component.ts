import { Component, OnInit } from '@angular/core';
import Trail from 'src/app/models/trail';
import { TrailService } from 'src/app/services/trails/trail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  trails: Trail[] = [];
  constructor(private trailService: TrailService) {}

  ngOnInit(): void {
    this.getTrails();
  }

  /**
   * Get all trail from observable and sets trails variable to
   * the trails that returns the backend.
   */
  getTrails(): void {
    this.trailService.getDashboardTrails().subscribe(
      (trails) => (this.trails = trails),
      () => {}
    );
  }
}
