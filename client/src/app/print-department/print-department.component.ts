import {Order} from '../model/order';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {PrintDepartmentService} from './print-department.service';
import {OrderDetails} from '../model/order-details';
import {OrderDetailsViewerComponent} from '../order-details-viewer/order-details-viewer.component';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData
} from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  templateUrl: 'print-department.component.html',
  styleUrls: ['./print-department.component.css']
})
export class PrintDepartmentComponent implements OnInit {

  constructor(
    protected printDepartmentService: PrintDepartmentService,
    protected dialog: MatDialog) {
  }

  protected displayedColumns: string[] =
    ['name', 'author', 'copies', 'manuscriptSheets', 'subject', 'details', 'printer', 'bookbinder'];
  protected orders: MatTableDataSource<Order>;

  ngOnInit() {
    this.printDepartmentService.orders()
      .subscribe(orders => this.orders = new MatTableDataSource(orders));
  }

  showDetails(details: OrderDetails): void {
    this.dialog.open(OrderDetailsViewerComponent, {
      width: '640px',
      data: JSON.parse(JSON.stringify(details))
    });
  }

  printerCompleted(order: Order): boolean {
    return order.status === 'PRINTED';
  }

  bookbinderCompleted(order: Order): boolean {
    return order.status === 'IN_WAREHOUSE';
  }

  printer(order: Order): void {
    const onConfirm = () => {
      this.printDepartmentService.printer(order).subscribe(newOrder => {
        order.status = newOrder.status;
        this.ngOnInit();
      });
    };
    this.showConfirmation('Відправити на палітурні роботи?', onConfirm);
  }

  bookbinder(order: Order): void {
    const onConfirm = () => {
      this.printDepartmentService.bookbinder(order).subscribe(newOrder => {
        order.status = newOrder.status;
        this.ngOnInit();
      });
    };
    this.showConfirmation('Відправити на склад?', onConfirm);
  }

  showConfirmation(message: string, onConfirm: () => void): void {
    const dialogData = new ConfirmationDialogData(message, onConfirm);
    this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: dialogData
    });
  }
}
