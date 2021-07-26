import { Component, OnInit } from '@angular/core';
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
            'https://cdn.pixabay.com/photo/2019/06/08/20/02/borsch-4260907_960_720.jpg'
        ),
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
