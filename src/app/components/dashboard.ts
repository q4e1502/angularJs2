import { Component, OnInit } from '@angular/core';
import { Hero } from '../utils/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '../views/dashboard.component.html',
  styleUrls: ['../style.css']
})

export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getRooms()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}