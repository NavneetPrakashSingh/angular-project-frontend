import {Injectable} from '@angular/core';
import {notificationTO} from '../to/notificationTO';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private httpClient: HttpClient) {
  }

  sendTimeline(listOfTimeline) {
    console.log('Inside send timeline service');
    const url = 'http://localhost:8082/api/postNotification';
    // tslint:disable-next-line:max-line-length
    const headers = {Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJOYXZuZWV0IiwiZXhwIjoxNTkwMjA5Mjk0LCJpYXQiOjE1OTAxOTEyOTR9.nN_z1IE4qs68Oo2HdVtgPiIR_YRXJrdrcNlcOD-aRP7rSLDNBlV_DWRxDDVjOwT0m6GN8tWGogyVxVhfqcXoOA'};
    const body = listOfTimeline;
    console.log(body);
    this.httpClient.post<any>(url, body, {headers}).subscribe(data => {
      console.log('Data is' + data);
      return data;
    });
  }
}
