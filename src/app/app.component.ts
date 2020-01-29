import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  number = 0;
  title = 'angular-essentials';
  rootName = '789';
  rootItems = ['Apples', 'Bananas', 'Cherries'];
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
    this.swService.fetchCharacters();
  }

  onIncrease() {
    this.number = this.number * 2;
  }

  onNameChanged(newName) {
    this.rootName = newName;
  }

  onItemWasAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }
}
