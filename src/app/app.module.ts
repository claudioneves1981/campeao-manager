import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CampeaoListComponent } from './campeoes/campeao-list.component';
import { StarComponent } from './star/star.component';
import { Error404Component } from './error-404/erro-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CampeaoInfoComponent } from './campeoes/campeao-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CampeaoListComponent,
    StarComponent,
    Error404Component,
    NavBarComponent,
    CampeaoInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'campeoes', component: CampeaoListComponent
      },
      {
        path: 'campeoes/info/:id', component: CampeaoInfoComponent
      },
      {
        path: '',redirectTo: 'campeoes', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
