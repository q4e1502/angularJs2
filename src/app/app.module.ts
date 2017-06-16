import { BrowserModule }         from '@angular/platform-browser';
import { NgModule, OnInit }              from '@angular/core';
import { FormsModule }           from '@angular/forms';
import { HttpModule }            from '@angular/http';
import { RouterModule }          from '@angular/router';
import { Ng2Cable, Broadcaster } from 'ng2-cable/js/index';

import { AppComponent }          from './app.component';
import { HeroesComponent }       from './components/heroes';
import { DashboardComponent }    from './components/dashboard';
import { HeroDetailComponent }   from './components/hero-detail';
import { HeroService }           from './services/hero.service';
import { RoutesModule }          from './routes';

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
    RoutesModule,
  ],
  providers: [HeroService, Ng2Cable, Broadcaster],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  constructor(

  ){}

  ngOnInit(): void {
    // console.log(angular)
    // this.getHeroes();
  }
}
