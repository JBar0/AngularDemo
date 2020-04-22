import {EventEmitter, Injectable} from '@angular/core';
import {RecipeModel} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected: EventEmitter<RecipeModel>;

  private recipes: RecipeModel[] = [
    new RecipeModel('A test', 'Description',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
    new RecipeModel('A test', 'Description',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')
  ];

  constructor() {
    this.recipeSelected = new EventEmitter<RecipeModel>();
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
