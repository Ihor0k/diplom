import {NgModule} from '@angular/core';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTabsModule
  ]
})
export class MaterialModule {
}
