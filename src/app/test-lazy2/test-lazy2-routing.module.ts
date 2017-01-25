import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestLazy2Component } from "./test-lazy2.component"

const routes: Routes = [
    {
        path: "",
        component: TestLazy2Component
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLazy2RoutingModule { }
