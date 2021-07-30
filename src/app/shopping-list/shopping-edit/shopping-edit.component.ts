import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('nameInput', {static: true}) nameInputRef;
    @ViewChild('amountInput', {static: true}) amountInputRef;

   @Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
      const ingrName = this.nameInputRef.nativeElement.value;
      const ingrAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingrName, ingrAmount);
      this.ingredientAdded.emit(newIngredient);
  }

}
