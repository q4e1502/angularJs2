import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { FormsModule }           from '@angular/forms';
import { HttpModule }            from '@angular/http';
import { RouterModule }          from '@angular/router';

import { AppComponent }          from './app.component';
import { HeroesComponent }       from './components/heroes';
import { DashboardComponent }    from './components/dashboard';
import { HeroDetailComponent }   from './components/hero-detail';
import { HeroService }           from './services/hero.service';
import { RoutesModule }          from './routes'



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
