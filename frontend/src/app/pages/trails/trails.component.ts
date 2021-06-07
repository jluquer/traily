import { Component, OnInit } from '@angular/core';
import Trail from 'src/app/models/trail';
import { TrailService } from 'src/app/services/trails/trail.service';

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.scss'],
})
export class TrailsComponent implements OnInit {
  trails: Trail[] = [];
  constructor(private trailService: TrailService) {}

  ngOnInit(): void {
    this.getTrails();
  }

  /**
   * Get all trails from observable and sets trails variable to
   * the trails that returns the backend.
   */
  getTrails() {
    this.trailService.getAllTrails().subscribe(
      (trails) => (this.trails = trails),
      () => {}
    );
  }
}
