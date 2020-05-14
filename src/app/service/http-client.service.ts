import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {parkingTO} from '../to/parkingTO';
import {map, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getSlots() {
    console.log('Inside getSlots method');
    return this.httpClient.get<parkingTO[]>('http://localhost:8082/api/slots', {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYXZuZWV0IiwiZXhwIjoxNTg5NDA1NTIyLCJpYXQiOjE1ODkzODc1MjJ9.jeOnmchG0yzlnSaZ06c11oJMc0YPiVy5kAGkZ39sVoDZfcD-LHD1-TXMXZb24hpzhn34FlTUsnqGERgfgqjcUg'),
      observe: 'response'
    }).pipe(
      share(), // <========== YOU HAVE TO SHARE THIS OBSERVABLE TO AVOID MULTIPLE REQUEST BEING SENT SIMULTANEOUSLY
      map(res => {
        return res.body;
        // const token = res.headers.get('token');
        // const newRefreshToken = res.headers.get('refreshToken');
        // store the new tokens
        // localStorage.setItem('refreshToken', newRefreshToken);
        // localStorage.setItem('token', token);
        // return token;
      })
    );
  }
}
