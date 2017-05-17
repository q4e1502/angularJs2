import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
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

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes );
  }
}
