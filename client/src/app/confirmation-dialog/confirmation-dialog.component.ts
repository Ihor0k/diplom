import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

export class ConfirmationDialogData {
  private message: string;
  private onConfirm: () => void;

  constructor(
    message: string,
    onConfirm: () => void
  ) {
    this.message = message;
    this.onConfirm = onConfirm;
  }
}

@Component({
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) protected data: ConfirmationDialogData) {
  }
}
