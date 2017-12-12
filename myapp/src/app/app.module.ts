import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoxesComponent } from './boxes/boxes.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { MyDraggableDirective } from './shared/draggable.drirective';
import { AngularDraggableModule} from 'angular2-draggable';
import { DragulaComponent } from './dragula/dragula.component';

// Router configurations
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'boxes', component: BoxesComponent },
  {path: 'dragula', component: DragulaComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoxesComponent,
    PageNotFoundComponent,
    MyDraggableDirective,
    DragulaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularDraggableModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
