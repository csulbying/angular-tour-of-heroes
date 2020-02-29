import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[]

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    const heroes$: Observable<Hero[]> = this.heroService.getHeroes()
    heroes$.subscribe(hs => (this.heroes = hs.slice(1, 5)))
  }
}
