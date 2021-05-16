import { Component, Input, OnInit } from '@angular/core';
import Trail from 'src/app/models/trail';

@Component({
  selector: 'app-trail-list',
  templateUrl: './trail-list.component.html',
  styleUrls: ['./trail-list.component.scss'],
})
export class TrailListComponent implements OnInit {
  @Input() trails: Trail[] = [];
  constructor() {}

  ngOnInit(): void {}

  trailInfo(trailId?: number) {
    
  }
}
