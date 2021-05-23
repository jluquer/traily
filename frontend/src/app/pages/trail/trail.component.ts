import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Trail from 'src/app/models/trail';
import { TrailService } from 'src/app/services/trails/trail.service';

@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.scss'],
})
export class TrailComponent implements OnInit {
  trail?: Trail;
  constructor(
    private activatedRoute: ActivatedRoute,
    private trailService: TrailService
  ) {}

  ngOnInit(): void {
    const trailId = this.activatedRoute.snapshot.params.trailId;
    this.trailService
      .getOneById(trailId)
      .subscribe((trail) => {
        (this.trail = trail)
        console.log(trail);
      });
  }

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
}
