import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovertorService {
  private SERVER_URL: string;

  constructor(private http: HttpClient) {
    this.SERVER_URL = environment.serverUrl;
  }

  getMeasurements() {
    return this.http.get(this.SERVER_URL + '/convert/measurements');
  }

  getSIUnits() {
    return this.http.get(this.SERVER_URL + '/convert/si-units');
  }

  convert(measurment: string, siunit: string, value: number) {
    return this.http.get(this.SERVER_URL + '/convert/' + measurment + '/' +
      siunit + '/' + value);
  }
}
