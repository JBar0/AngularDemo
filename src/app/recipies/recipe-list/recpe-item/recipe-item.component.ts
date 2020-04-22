import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../recipe.model';

@Component({
  selector: 'app-recpie-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Output() recipeSelected: EventEmitter<void>;

  constructor() {
    this.recipeSelected = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}
