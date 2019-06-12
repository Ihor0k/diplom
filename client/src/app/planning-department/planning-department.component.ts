import {Order} from '../model/order';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {PlanningDepartmentService} from './planning-department.service';
import {OrderDetailsEditorComponent} from './order-details-editor/order-details-editor.component';


@Component({
  templateUrl: 'planning-department.component.html'
})
export class PlanningDepartmentComponent implements OnInit {

  constructor(
    protected managerService: PlanningDepartmentService,
    protected dialog: MatDialog) {
  }

  protected displayedColumns: string[] = ['name', 'author', 'copies', 'manuscriptSheets', 'subject', 'buttons'];
  protected orders: MatTableDataSource<Order>;

  ngOnInit() {
    this.managerService.orders()
      .subscribe(orders => this.orders = new MatTableDataSource(orders));
  }

  addDetails(order: Order): void {
    const onClose = newOrder => {
      this.managerService.newOrderDetails(newOrder)
        .subscribe(() => {
          const index = this.orders.data.findIndex(o => o.id === order.id);
          this.orders.data.splice(index, 1);
          this.orders._updateChangeSubscription();
        });
    };
    this.openDialog(order, onClose);
  }

  openDialog(order: Order, onClose: (Order) => void) {
    const dialogRef = this.dialog.open(OrderDetailsEditorComponent, {
      width: '640px',
      data: JSON.parse(JSON.stringify(order.details))
    });
    dialogRef.afterClosed().subscribe(result => {
      if ((result && Object.keys(result).length)) {
        order.details = result;
        onClose(order);
      }
    });
  }
}
