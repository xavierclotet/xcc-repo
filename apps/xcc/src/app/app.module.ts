import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiToolbarModule }  from '@xcc/ui/toolbar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiToolbarModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
