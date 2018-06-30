import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';   // also import of!

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {   // Async Way, with subscribe Observer later!
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // of(HEROES), returns Observable<Hero[]>
  }
}
