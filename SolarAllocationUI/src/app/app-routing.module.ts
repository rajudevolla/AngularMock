import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllocateComponent} from './allocate/allocate.component';
import { SolarAllocationListComponent } from './solar-allocation-list/solar-allocation-list.component';

const routes: Routes = [
  {path:'',pathMatch:'full' ,redirectTo:'allocate'},
  {path:'allocate',component:AllocateComponent},
  {path:'book',component:SolarAllocationListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
