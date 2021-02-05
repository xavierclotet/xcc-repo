import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToolbarComponent } from './ui-toolbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiToolbarComponent],
  exports: [UiToolbarComponent],
})
export class UiToolbarModule {}
