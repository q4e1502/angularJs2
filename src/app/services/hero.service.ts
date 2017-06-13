import { Injectable } from '@angular/core';
import { Headers, Http }       from '@angular/http';
import { Hero } from '../utils/hero';
import { HEROES, API_URL } from '../utils/mock-hero';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private roomssUrl = API_URL + "/rooms/get_rooms";

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }


  getRooms(): Promise<Hero[]>{
    return this.http.get(this.roomssUrl)
                    .toPromise()
                    .then(response => response.json() as Hero[])
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
