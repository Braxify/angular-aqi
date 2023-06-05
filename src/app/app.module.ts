import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TablesPageComponent } from './pages/tables-page/tables-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorComponent,
    NavigationComponent,
    MainPageComponent,
    TablesPageComponent,
    MapPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
