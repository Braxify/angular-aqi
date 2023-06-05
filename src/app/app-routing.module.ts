import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { TablesPageComponent } from './pages/tables-page/tables-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

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
