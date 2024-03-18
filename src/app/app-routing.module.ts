import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcityComponent } from './showcity/showcity.component';
import { EmptyComponent } from './empty/empty.component';
import { ShowweatherComponent } from './showweather/showweather.component';

const routes: Routes = [

  {path:"showcity",component:ShowcityComponent},
  {path:"empty",component:EmptyComponent},
  {path:"showweather", component:ShowweatherComponent},
  {path:"",redirectTo:"empty",pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
