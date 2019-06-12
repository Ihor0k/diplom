import {Order} from '../model/order';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {Component, OnInit} from '@angular/core';
import {EditorialDepartmentService} from './editorial-department.service';
import {OrderDetails} from '../model/order-details';
import {OrderDetailsViewerComponent} from '../order-details-viewer/order-details-viewer.component';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData
} from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  templateUrl: 'editorial-department.component.html',
  styleUrls: ['./editorial-department.component.css']
})
export class EditorialDepartmentComponent implements OnInit {

  constructor(
    protected editorialDepartmentService: EditorialDepartmentService,
    protected dialog: MatDialog) {
  }

  protected displayedColumns: string[] =
    ['name', 'author', 'copies', 'manuscriptSheets', 'subject', 'details', 'editor', 'artist', 'bookmaker'];
  protected orders: MatTableDataSource<Order>;

  ngOnInit() {
    this.editorialDepartmentService.orders()
      .subscribe(orders => this.orders = new MatTableDataSource(orders));
  }

  showDetails(details: OrderDetails): void {
    this.dialog.open(OrderDetailsViewerComponent, {
      width: '500px',
      data: JSON.parse(JSON.stringify(details))
    });
  }

  bookmakerDisabled(order: Order): boolean {
    return order.status !== 'PASSED_EDITOR_AND_ARTIST';
  }

  editorCompleted(order: Order): boolean {
    return order.status === 'PASSED_EDITOR' || order.status === 'PASSED_EDITOR_AND_ARTIST';
  }

  artistCompleted(order: Order): boolean {
    return order.status === 'PASSED_ARTIST' || order.status === 'PASSED_EDITOR_AND_ARTIST';
  }

  editor(order: Order): void {
    const onConfirm = () => {
      this.editorialDepartmentService.editor(order).subscribe(newOrder => {
        order.status = newOrder.status;
        this.ngOnInit();
      });
    };
    this.showConfirmation('Відправити на верстку?', onConfirm);
  }

  artist(order: Order): void {
    const onConfirm = () => {
      this.editorialDepartmentService.artist(order).subscribe(newOrder => {
        order.status = newOrder.status;
        this.ngOnInit();
      });
    };
    this.showConfirmation('Відправити на верстку?', onConfirm);
  }

  bookmaker(order: Order): void {
    const onConfirm = () => {
      this.editorialDepartmentService.bookmaker(order).subscribe(newOrder => {
        order.status = newOrder.status;
        this.ngOnInit();
      });
    };
    this.showConfirmation('Відправити на друк?', onConfirm);
  }

  showConfirmation(message: string, onConfirm: () => void): void {
    const dialogData = new ConfirmationDialogData(message, onConfirm);
    this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: dialogData
    });
  }
}
