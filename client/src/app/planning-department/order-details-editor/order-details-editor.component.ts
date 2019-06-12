import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Order} from '../../model/order';
import {Material} from '../../model/material';
import {PlanningDepartmentService} from '../planning-department.service';
import {OrderDetails} from '../../model/order-details';
import {MaterialOrder} from '../../model/material-order';

@Component({
  templateUrl: './order-details-editor.component.html',
})
export class OrderDetailsEditorComponent implements OnInit {
  private allMaterials: Material[] = [];

  constructor(
    protected service: PlanningDepartmentService,
    @Inject(MAT_DIALOG_DATA) protected details: OrderDetails) {
  }

  ngOnInit(): void {
    this.details = {materials: [{material: {} as Material} as MaterialOrder]} as OrderDetails;
    this.service.materials().subscribe(materials => this.allMaterials = materials);
  }

  private add(): void {
    this.details.materials.push({material: {} as Material} as MaterialOrder);
  }

  private remove(index: number): void {
    this.details.materials.splice(index, 1);
  }
}
