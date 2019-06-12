import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import {OrderDetails} from '../model/order-details';
import {MaterialOrder} from '../model/material-order';

@Component({
  templateUrl: './order-details-viewer.component.html',
  styleUrls: ['./order-details-viewer.component.css']
})
export class OrderDetailsViewerComponent {

  protected displayedColumns: string[] = ['name', 'unit', 'amount', 'completed'];
  protected materials: MatTableDataSource<MaterialOrder>;


  constructor(
    @Inject(MAT_DIALOG_DATA) protected details: OrderDetails) {
    this.materials = new MatTableDataSource(details.materials);
  }
}
