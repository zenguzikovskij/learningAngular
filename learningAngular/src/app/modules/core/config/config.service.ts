import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';

import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getData(url: string, reqParams?: { [key: string]: String[] }): Observable<ArrayBuffer> {
    const options = {
      responseType: 'json' as const,
    };

    if ( reqParams ) {
      url += '?';
      Object.keys(reqParams).forEach( key => {
        let paramList = reqParams[key].reduce( (prev, cur) => prev + ',' + cur );
        url += '&' + key + '=' + paramList;
      });
    }

    
    return this.http.get<ArrayBuffer>(url, options);
  }

  sendData(url: string, body: Object, headers?: HttpHeaders): Observable<ArrayBuffer> {
    if (headers) {
      return this.http.post<ArrayBuffer>(url, body, { headers: headers });
    } else {
      return this.http.post<ArrayBuffer>(url, body);
    }
    
  }

  updateData(url: string, dataToSend: Object, headers: HttpHeaders): Observable<ArrayBuffer> {
    if (headers) {
      return this.http.put<ArrayBuffer>(url, dataToSend, { headers: headers });
    } else {
      return this.http.put<ArrayBuffer>(url, dataToSend);
    }
  }
}
