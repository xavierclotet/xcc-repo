import { Component, OnInit } from '@angular/core';
import { BggGame, TestsFacadeService } from '@xcc/tests/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'xcc-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.scss'],
})
export class TestsPageComponent implements OnInit {
  game$: Observable<BggGame>;
  constructor(private testsfacade: TestsFacadeService) {}

  ngOnInit(): void {
    this.game$ = this.testsfacade.getThing('329465');
  }
}
