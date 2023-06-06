import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page';
import { TablesPageComponent } from './pages/tables-page';
import { MapPageComponent } from './pages/map-page';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'tables', component: TablesPageComponent },
  { path: 'map', component: MapPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
