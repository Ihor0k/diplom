import {Order} from '../model/order';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {ManagerService} from './manager.service';
import {OrderEditorComponent} from './order-editor/order-editor.component';
import {OrderDetailsViewerComponent} from '../order-details-viewer/order-details-viewer.component';
import {OrderDetails} from '../model/order-details';


@Component({
  templateUrl: 'manager.component.html'
})
export class ManagerComponent implements OnInit {

  constructor(
    protected managerService: ManagerService,
    protected dialog: MatDialog) {
  }

  protected displayedColumns: string[] = ['name', 'author', 'copies', 'manuscriptSheets', 'subject', 'status', 'details'];
  protected orders: MatTableDataSource<Order>;

  ngOnInit() {
    this.managerService.orders()
      .subscribe(orders => this.orders = new MatTableDataSource(orders));
  }

  add(): void {
    const onClose = order => {
      this.managerService.newOrder(order)
        .subscribe(id => {
          order.id = id;
          this.orders.data.push(order);
          this.orders._updateChangeSubscription();
        });
    };
    this.openDialog({} as Order, onClose);
  }

  showDetails(details: OrderDetails): void {
    this.dialog.open(OrderDetailsViewerComponent, {
      width: '500px',
      data: JSON.parse(JSON.stringify(details))
    });
  }

  openDialog(order: Order, onClose: (Order) => void) {
    const dialogRef = this.dialog.open(OrderEditorComponent, {
      width: '250px',
      data: JSON.parse(JSON.stringify(order))
    });
    dialogRef.afterClosed().subscribe(result => {
      if ((result && Object.keys(result).length)) {
        onClose(result);
      }
    });
  }

  getStatus(status: string) {
    switch (status) {
      case 'NEW':
        return 'Новий';
      case 'PLANED':
        return 'Прораховано';
      case 'PASSED_EDITOR':
      case 'PASSED_ARTIST':
      case 'PASSED_EDITOR_AND_ARTIST':
        return 'Редагується';
      case 'READY_TO_PRINT':
        return 'Готово до друку';
      case 'PRINTED':
        return 'Надруковано';
      case 'IN_WAREHOUSE':
        return 'На складі';
      case 'DISPATCHED':
        return 'Відправлено';
    }
  }
}
