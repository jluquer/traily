import { Component, Input, OnChanges } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnChanges {
  constructor() {}
  @Input() elevationGain = 0;
  @Input() distance = 0;
  private label = 'Performance | x: distance (km) | y: height (m)'
  lineChartData: ChartDataSets[] = [
    { data: this.generateElevation, label: this.label },
  ];

  lineChartLabels: Label[] = this.generateDistance;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#474c3f',
      backgroundColor: '#95cd43',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line' as ChartType;

  ngOnChanges(changes: any): void {
    console.log(changes);
    this.distance = changes.distance.currentValue;
    this.elevationGain = changes.elevationGain.currentValue;
    this.lineChartLabels = this.generateDistance;
    this.lineChartData = [
      { data: this.generateElevation, label: this.label },
    ];
  }

  /**
   * Create distance labels to be displayed in chart.
   */
  get generateDistance(): Label[] {
    let labels: Array<Label> = [];
    const sum = this.distance / 10;
    for (let i = 0; i < 10; i++) {
      labels.push((sum * (i + 1)) as unknown as Label);
    }

    return labels;
  }

  /**
   * Creates random data based on the trail elevation
   * gain to display a random performance chart.
   */
  get generateElevation(): Array<number> {
    let dataSet = [];
    while (dataSet.length < 10) {
      dataSet.push(Math.floor(Math.random() * this.elevationGain) + 1);
    }
    dataSet[Math.random() * 10] = this.elevationGain;
    return dataSet;
  }
}
