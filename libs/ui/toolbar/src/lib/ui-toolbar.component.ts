import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xcc-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiToolbarComponent {
  menuOpened = false;

  clickMenu() {
    this.menuOpened = !this.menuOpened;
  }

}
