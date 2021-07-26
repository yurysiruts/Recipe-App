import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] = [
        new Ingredient('Carrots', 2),
        new Ingredient('Onions', 1),
        new Ingredient('Cabbage', 2),
        new Ingredient('Beef', 1),
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
