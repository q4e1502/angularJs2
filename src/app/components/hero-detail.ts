import { Component, Input } from '@angular/core';
import { Hero } from '../utils/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: '../views/hero-detail.component.html',
  styleUrls: ['../style.css']
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}