import { Component, OnInit } from '@angular/core';
import {Serie} from './Serie';
import {dataSeries} from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }
  averageSeasons(series: Serie[]): void {
    let totalS: number = 0;
    let avgss: HTMLElement = document.getElementById("average-seasons")!;
    series.forEach((serie) => {(totalS += serie.seasons)});
    avgss.innerHTML = `${(totalS / series.length)}`;
  }
  ngOnInit() {
    this.getSeries();
    this.averageSeasons(dataSeries);
  }

}
