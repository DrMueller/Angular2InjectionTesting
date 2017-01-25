import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ TestEagerComponent } from "./test-eager.component";

const routes: Routes = [
      {
        path: "testEager",
        component: TestEagerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TestEagerRoutingModule {  
}
