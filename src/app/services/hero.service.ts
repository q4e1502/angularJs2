import { Injectable } from '@angular/core';
import { Hero } from '../utils/hero';
import { HEROES } from '../utils/mock-hero';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
