import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'xcc-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiToolbarComponent {
  menuOpened = false;
  constructor(private router: Router) {}
  clickMenu() {
    this.menuOpened = !this.menuOpened;
  }

  goTo(link: string) {
    this.router.navigate([link]);
  }

}
