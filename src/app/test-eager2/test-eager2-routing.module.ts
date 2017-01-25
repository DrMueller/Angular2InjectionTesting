import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ TestEager2Component } from "./test-eager2.component";

import { CoreFeatureService } from "app/core";



const routes: Routes = [
      {
        path: "testEager2",
        component: TestEager2Component,
        children: [
            { path: "", component: TestEager2Component }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestEager2RoutingModule {
}
