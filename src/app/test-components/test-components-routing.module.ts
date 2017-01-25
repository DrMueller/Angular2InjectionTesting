import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponentsComponent } from "./test-components.component";

const routes: Routes = [
    {
        path: "testComponents",
        component: TestComponentsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TestComponentsRoutingModule { }
