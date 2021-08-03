import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model'

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
        'Big Fat Burger',
        'Extra juicy double meat burger',
        'https://bigfatburgers.com/wp-content/uploads/2019/07/DoubleBaconCheeseBurger.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 2),
          new Ingredient('Salat', 2),
          new Ingredient('Tomato slices', 4),
          new Ingredient('Cucumber', 1),
          new Ingredient('Cheese', 1),
        ]
    ),
    new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20),
          new Ingredient('Lemon', 1),
        ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) {}
  
  addIngrToShopList(ingredients: Ingredient[]) {
    this.slService.addIngredientsFromRecipe(ingredients)
  }

}