import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Material} from '../../model/material';

@Component({
  templateUrl: './material-delivery.component.html',
})
export class MaterialDeliveryComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) protected material: Material) {
  }
}
