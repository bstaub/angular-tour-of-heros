import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';   // also import of!

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {   // Async Way, with subscribe Observer later!
    return of(HEROES); // of(HEROES), returns Observable<Hero[]>
  }
}
