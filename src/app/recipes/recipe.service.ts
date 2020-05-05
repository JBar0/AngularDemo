import {Injectable} from '@angular/core';
import {RecipeModel} from './recipe.model';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged: Subject<RecipeModel[]>;

  // private recipes: RecipeModel[] = [
  //   new RecipeModel(
  //     'A test',
  //     'Description',
  //     'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
  //     [
  //       new IngredientModel('Meat', 1),
  //       new IngredientModel('French fries', 20)
  //     ]),
  //   new RecipeModel(
  //     'A test2',
  //     'Description2',
  //     'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
  //     [
  //       new IngredientModel('Meat', 1),
  //       new IngredientModel('Buns', 2)
  //     ])
  // ];
  private recipes: RecipeModel[] = [];


  constructor(private shoppingListService: ShoppingListService) {
    this.recipesChanged = new Subject<RecipeModel[]>();
  }

  setRecipes(recipes: RecipeModel[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
