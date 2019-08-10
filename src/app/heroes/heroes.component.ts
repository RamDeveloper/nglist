import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
//import { HEROES } from '../mock-heroes'; //as heroservice is enabled we disabled the heros mock data module
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	//hero = 'Herocomponent values'; //string 
  //now hero is change from string to object
  /*hero: Hero = {
  id:1,
  name: 'windstrom'
  };*/
  selectedHero: Hero;

  //Get the list of heroes from mockheros file 
  //heroes = HEROES; //removed due to heroservice

  heroes: Hero[];

  //constructor() { }
  constructor(private heroService: HeroService) { }
  
  onSelect(hero: Hero): void {
  		this.selectedHero = hero;
	}
	

  //without observable
  /*getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
