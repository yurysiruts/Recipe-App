import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
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

    @Output() recipeTransferred = new EventEmitter<Recipe>();

    onRecipeSelected(recipe: Recipe) {
        this.recipeTransferred.emit(recipe)
    }

  constructor() { }

  ngOnInit(): void {
  }

}
