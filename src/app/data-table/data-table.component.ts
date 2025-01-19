import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  @Input() paginatedData: any[] = []; // Receive data from the parent component
  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>(); // Emit selected row data to parent

  selectRow(row: any) {
    this.rowSelected.emit(row); // Emit the clicked row data
  }
}
