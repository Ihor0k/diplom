import {Component, Input, OnInit} from '@angular/core';
import {Material} from '../../../model/material';
import {MaterialOrder} from '../../../model/material-order';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-material-order-editor',
  templateUrl: './material-order-editor.component.html',
  styleUrls: ['./material-order-editor.component.css']
})
export class MaterialOrderEditorComponent implements OnInit {
  @Input() materialOrder: MaterialOrder;
  @Input() allMaterials: Material[];
  private materialNameControl = new FormControl();
  private materialUnitControl = new FormControl();
  private filteredMaterials: Observable<Material[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.materialNameControl.setValue(this.materialOrder.material.name);
    this.materialUnitControl.setValue(this.materialOrder.material.unit);
    this.materialUnitControl.valueChanges.subscribe(value => {
      this.materialOrder.material.unit = value;
      this.updateId();
    });
    this.materialNameControl.valueChanges.subscribe(value => {
      this.materialOrder.material.name = value;
      this.updateId();
    });
    this.filteredMaterials = this.materialNameControl.valueChanges
      .pipe(
        map(value => this.displayFn(value)),
        map(value => this.filter(value))
      );
  }

  private filter(value: string): Material[] {
    const filterValue = value.toLowerCase();
    return this.allMaterials.filter(material => {
      return material.name.toLowerCase().includes(filterValue);
    });
  }

  private displayFn(material: Material | string): string {
    if (material == null) {
      return '';
    } else if (typeof material === 'object') {
      return material.name;
    } else {
      return material;
    }
  }

  private onSelectMaterial(material: Material): void {
    this.materialUnitControl.setValue(material.unit);
    this.materialOrder.material.name = material.name;
    this.materialOrder.material.unit = material.unit;
    this.updateId();
  }

  private updateId(): void {
    const material = this.allMaterials.find(value => {
      return value.name === this.materialOrder.material.name && value.unit === this.materialOrder.material.unit;
    });
    if (material) {
      this.materialOrder.material.id = material.id;
    } else {
      this.materialOrder.material.id = null;
    }
  }
}
