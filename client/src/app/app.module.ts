import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ManagerComponent} from './manager/manager.component';
import {OrderEditorComponent} from './manager/order-editor/order-editor.component';
import {PlanningDepartmentComponent} from './planning-department/planning-department.component';
import {OrderDetailsEditorComponent} from './planning-department/order-details-editor/order-details-editor.component';
import {MaterialOrderEditorComponent} from './planning-department/order-details-editor/material-order-editor/material-order-editor.component';
import {EditorialDepartmentComponent} from './editorial-department/editorial-department.component';
import {OrderDetailsViewerComponent} from './order-details-viewer/order-details-viewer.component';
import {PrintDepartmentComponent} from './print-department/print-department.component';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {WarehouseComponent} from './warehouse/warehouse.component';
import {MaterialDeliveryComponent} from "./warehouse/material-delivery/material-delivery.component";

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    OrderEditorComponent,
    PlanningDepartmentComponent,
    OrderDetailsEditorComponent,
    MaterialOrderEditorComponent,
    EditorialDepartmentComponent,
    OrderDetailsViewerComponent,
    ConfirmationDialogComponent,
    PrintDepartmentComponent,
    WarehouseComponent,
    MaterialDeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [
    OrderEditorComponent,
    OrderDetailsEditorComponent,
    OrderDetailsViewerComponent,
    ConfirmationDialogComponent,
    MaterialDeliveryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
