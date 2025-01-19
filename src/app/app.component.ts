import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dar-ElRahman';
  data = [
    {
      serial: 255,
      name: 'إبراهيم محمد الوفي',
      nationalId: '2960126300711',
      status: 'متصل',
      period: 'الفترة الأولى',
      class: 'حمادة عبد ربه',
    },
    {
      serial: 255,
      name: 'محمد حمزة أحمد عبد المنعم',
      nationalId: '2960126300712',
      status: 'منقطع',
      period: 'الفترة الثانية',
      class: 'محمد أحمد عبد المنعم',
    },
    {
      serial: 255,
      name: 'إبراهيم محمد الوفي',
      nationalId: '2960126300711',
      status: 'متصل',
      period: 'الفترة الأولى',
      class: 'حمادة عبد ربه',
    },
    {
      serial: 255,
      name: 'محسن محمد إبراهيم',
      nationalId: '2960126300713',
      status: 'متصل',
      period: 'الفترة الأولى',
      class: 'حمادة عبد ربه',
    },
    {
      serial: 255,
      name: 'إبراهيم محمد الوفي',
      nationalId: '2960126300711',
      status: 'متصل',
      period: 'الفترة الأولى',
      class: 'حمادة عبد ربه',
    },
    {
      serial: 255,
      name: 'إبراهيم محمد الوفي',
      nationalId: '2960126300711',
      status: 'متصل',
      period: 'الفترة الأولى',
      class: 'حمادة عبد ربه',
    },
    {
      serial: 255,
      name: 'محمد حمزة أحمد عبد المنعم',
      nationalId: '2960126300712',
      status: 'منقطع',
      period: 'الفترة الثانية',
      class: 'محمد أحمد عبد المنعم',
    },
    {
      serial: 255,
      name: 'إبراهيم محمد الوفي',
      nationalId: '2960126300711',
      status: 'متصل',
      period: 'الفترة الأولى',
      class: 'حمادة عبد ربه',
    },
    {
      serial: 255,
      name: 'محسن محمد إبراهيم',
      nationalId: '2960126300713',
      status: 'متصل',
      period: 'الفترة الأولى',
      class: 'حمادة عبد ربه',
    },
    {
      serial: 255,
      name: 'إبراهيم محمد الوفي',
      nationalId: '2960126300711',
      status: 'متصل',
      period: 'الفترة الأولى',
      class: 'حمادة عبد ربه',
    },
  ];

  currentPage = 1;
  itemsPerPage = 5;
  selectedUser: any = this.data[0]; // Holds the selected row data

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

  handlePageChange(newPage: number) {
    this.currentPage = newPage;
  }

  // Total pages calculation
  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  handleRowSelection(row: any) {
    this.selectedUser = row; // Update the selected user data
  }
}
