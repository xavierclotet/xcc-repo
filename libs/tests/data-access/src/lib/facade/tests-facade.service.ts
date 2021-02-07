import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TestsApiService } from '../api/tests.api.service';
import { BggGame } from '../models/bgg.model';

@Injectable({
  providedIn: 'root',
})
export class TestsFacadeService {
  constructor(private testsApiService: TestsApiService) {}

  getThing(id: string): Observable<BggGame> {
    return this.testsApiService.getThingById(id);
  }
}
