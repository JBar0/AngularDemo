import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged: EventEmitter<IngredientModel[]>;
  private ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10),
  ];

  constructor() {
    this.ingredientsChanged = new EventEmitter<IngredientModel[]>();
  }

  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
