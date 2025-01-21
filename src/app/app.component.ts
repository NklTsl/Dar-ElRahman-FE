import { Component } from '@angular/core';
import { StudentComponent } from "./components/student/student.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [StudentComponent, SidebarComponent, HeaderComponent],
})
export class AppComponent {
  title = 'Dar-ElRahman';

  // get paginatedData() {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   return this.data.slice(startIndex, endIndex);
  // }

  // handlePageChange(newPage: number) {
  //   this.currentPage = newPage;
  // }

  // // Total pages calculation
  // get totalPages(): number {
  //   return Math.ceil(this.data.length / this.itemsPerPage);
  // }

  // handleRowSelection(row: any) {
  //   this.selectedUser = row; // Update the selected user data
  // }
}
