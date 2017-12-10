import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoxesComponent } from './boxes/boxes.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { MyDraggableDirective } from './shared/draggable.drirective';
import { AngularDraggableModule} from 'angular2-draggable';

// Router configurations
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'boxes', component: BoxesComponent },
  {path: 'other', component: PageNotFoundComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoxesComponent,
    PageNotFoundComponent,
    MyDraggableDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
