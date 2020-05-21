import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public mainHeading;
  public step1;
  public step2: any;

  constructor() {
    this.mainHeading = 'Create Timeline';
    this.step1 = 'Step1: Customize your notification';
    this.step2 = 'Step2: Generate tags';
  }

  ngOnInit(): void {
  }

}
