import { Component } from '@angular/core';
import { Hero } from './hero-detail/hero';

const HEROES: Hero[] = [
  {id: 11, name: 'Mr.Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Magenta'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AJ ';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
