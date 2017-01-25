import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestLazyComponent } from "./test-lazy.component";

const routes: Routes = [
        {
        path: "",
        component: TestLazyComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TestLazyRoutingModule { }
