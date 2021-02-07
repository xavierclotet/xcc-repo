import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsPageComponent } from './tests-page/tests-page.component';
import { RouterModule } from '@angular/router';
import { Test1Component } from './components/test1/test1.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', children: [
        {
          path: '', component: TestsPageComponent
        },
        {
          path: '1', component: Test1Component
        }
      ] },

    ]),
  ],
  declarations: [TestsPageComponent, Test1Component],
})
export class TestsPageModule {}
