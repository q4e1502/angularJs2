import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';
import { Hero } from '../utils/hero';

@Component({
  selector: 'my-heroes',
  templateUrl: '../views/heroes.component.html',
  styleUrls: ['../style.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes );
  }

  getRooms(): void {
    this.heroService.getRooms().then( heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
