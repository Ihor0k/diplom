import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Order} from '../../model/order';

@Component({
  templateUrl: './order-editor.component.html',
})
export class OrderEditorComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) protected order: Order) {
  }
}
