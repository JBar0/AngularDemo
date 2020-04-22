import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recpie-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
