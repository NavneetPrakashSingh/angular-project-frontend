import {Component, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {

  constructor(private httpClientService: HttpClientService) {
  }

  ngOnInit(): void {
    this.httpClientService.getSlots().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    console.log(response);
  }
}
