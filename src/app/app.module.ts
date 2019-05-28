import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { TargetsComponent } from './components/targets/targets.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListTargetsComponent } from './components/listtargets/listtargets.component';
const appRoutes: Routes = [
  {
    path: 'targets/:id',
    component: TargetsComponent
  },
  {
    path: 'targets',
    component: TargetsComponent
  },
  {
    path: 'showtargets',
    component: ListTargetsComponent
  },
  {
    path: '**',
    component: ListTargetsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TargetsComponent,
    ListTargetsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(DataService),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
