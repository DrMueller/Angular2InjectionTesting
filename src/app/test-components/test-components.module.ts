import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentsRoutingModule } from './test-components-routing.module';
import { TestComponentsComponent } from './test-components.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { SubComp31Component } from './sub-comp3-1/sub-comp3-1.component';
import { SubComp32Component } from './sub-comp3-2/sub-comp3-2.component';
import { SubSubComp311Component } from './sub-sub-comp3-1-1/sub-sub-comp3-1-1.component';

@NgModule({
  imports: [
    CommonModule,
    TestComponentsRoutingModule
  ],
  declarations: [TestComponentsComponent, Comp1Component, Comp2Component, Comp3Component,  SubComp31Component, SubComp32Component, SubSubComp311Component]
})
export class TestComponentsModule { }
