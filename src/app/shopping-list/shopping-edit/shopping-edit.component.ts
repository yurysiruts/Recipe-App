import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('nameInput', {static: true}) nameInputRef;
    @ViewChild('amountInput', {static: true}) amountInputRef;

  // constructor(private shoppingListService: ShoppingListService) { }
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
      const ingrName = this.nameInputRef.nativeElement.value;
      const ingrAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingrName, ingrAmount);
      this.slService.addIngredient(newIngredient)
  }

}
