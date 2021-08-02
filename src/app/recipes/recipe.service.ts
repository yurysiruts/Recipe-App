import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
        'Borsch Test Recipe',
        'Description Test',
        'https://assets.materialup.com/uploads/d2feb47f-3d3c-4b05-8673-a2886e5f6aca/preview'
    ),
    new Recipe(
        'Another Test Recipe',
        'Simple Description Test',
        'https://assets.materialup.com/uploads/d2feb47f-3d3c-4b05-8673-a2886e5f6aca/preview'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}