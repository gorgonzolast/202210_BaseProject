import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { maravilla } from '../maravilla/maravilla';

@Injectable()
export class MaravillaService {
  constructor(private http: HttpClient) { }
  getMaravillas(): Observable<maravilla[]> {
    return this.http.get<maravilla[]>("https://raw.githubusercontent.com/Uniandes-isis2603/recursos-isis2603/master/json/wonders.json");
  }

}
