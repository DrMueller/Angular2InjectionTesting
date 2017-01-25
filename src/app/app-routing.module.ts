import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "testLazy",
        loadChildren:  "app/test-lazy/test-lazy.module#TestLazyModule"
    },
    {
        path: "testLazy2",
        loadChildren:  "app/test-lazy2/test-lazy2.module#TestLazy2Module" 
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

