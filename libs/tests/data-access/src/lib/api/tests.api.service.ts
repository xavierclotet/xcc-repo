import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BggGame, BggThingsTypes } from '../models/bgg.model';

@Injectable({
  providedIn: 'root',
})
export class TestsApiService {
  private BGG_API_XML_URL = 'https://bgg-json.azurewebsites.net/';
  constructor(private http: HttpClient) {}

  getThingById(id: string): Observable<BggGame> {
    return this.http.get<BggGame>(`${this.BGG_API_XML_URL}thing/${id}`);
  }
}
