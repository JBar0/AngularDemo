import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipies/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';
import {RecipeStartComponent} from './recipies/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipies/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipies/recipe-edit/recipe-edit.component';
import {RecipesResolverService} from './recipies/recipes-resolver.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
