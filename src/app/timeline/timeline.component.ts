import {Component, OnInit, Pipe} from '@angular/core';
import {notificationTO} from '../to/notificationTO';
import {TimelineService} from "../service/timeline.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public mainHeading;
  public heading;
  public body;
  public step1;
  public step2: any;
  colors = new Map<string, string>();
  textColors = new Map<string, string>();
  notificationList = new Array<notificationTO>();
  private headingBackgroundColor: HTMLElement;
  private headingTextColor: HTMLElement;
  notification;
  timeSlot: any;
  timeInterval: any;

  constructor(private timelineService: TimelineService) {
    this.mainHeading = 'Create Timeline';
    this.step1 = 'Step 1: Customize your notification';
    this.step2 = 'Step 2: Generate tags';
    this.colors.set('Red', 'red');
    this.colors.set('Yellow', 'yellow');
    this.colors.set('Green', 'teal');
    this.colors.set('Blue', 'blue');
    this.colors.set('None', 'none');
    this.textColors.set('White', 'white');
    this.textColors.set('Black', 'black');
    this.notification = new notificationTO();
  }

  ngOnInit(): void {
  }

  onHeadingSelectionChange(value) {
    console.log(value);
    this.headingBackgroundColor = document.getElementById('timeline-toast-Header');
    this.headingBackgroundColor.style.backgroundColor = value;
    this.notification.headingColor = value;
  }

  onHeadingTextColorChange(value) {
    this.headingTextColor = document.getElementById('timeline-toast-Header');
    this.headingTextColor.style.color = value;
    this.notification.headingTextColor = value;
  }

  onBodySelectionChange(value) {
    this.headingBackgroundColor = document.getElementById('timeline-toast-Body');
    this.headingBackgroundColor.style.backgroundColor = value;
    this.notification.bodyColor = value;
  }

  onBodyTextColorChange(value) {
    this.headingTextColor = document.getElementById('timeline-toast-Body');
    this.headingTextColor.style.color = value;
    this.notification.bodyTextColor = value;
  }

  generateTags() {
    this.notification.heading = this.mainHeading;
    this.notification.message = this.body;
    this.notification.timeNotification = this.timeSlot;
    this.notification.timerInterval = this.timeInterval;
    this.notificationList.push(this.notification);

    // console.log(this.notificationList);
    console.log(this.timelineService.sendTimeline(this.notificationList));
    // alert('Tags generated');
  }
}
