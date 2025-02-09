import { CommonModule, NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher/teacher.service';
import { PeriodService } from 'src/app/services/period/period.service';
import { StudentService } from 'src/app/services/student/student.service';
import { RingService } from 'src/app/services/ring/ring.service';
import * as bootstrap from 'bootstrap'; // Import Bootstrap

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  imports: [NgClass, FormsModule, CommonModule],
})
export class StudentComponent implements OnInit {
  @ViewChild('studentModal') studentModal!: ElementRef; // Reference to the modal
  data: any[] = [];
  student = {
    fullName: '',
    nationalId: '',
    motherName: '',
    address: '',
    motherPhoneNumber: '',
    maritalStatus: 'غير معروف',
    periodName: '',
    ringId: 1,
    joiningDate: '',
    birthDate: '',
    fatherPhoneNumber: '',
    fatherEmailAddress: '',
  };
  error: any;
  periods: any[] = [
    { name: 'first', nameAR: 'الاولى' },
    { name: 'second', nameAR: 'الثانية' },
    { name: 'third', nameAR: 'الثالثة' },
  ];
  teachers: any[] = [];
  rings: any[] = [];
  constructor(
    protected authService: AuthService,
    private teacherService: TeacherService,
    // private periodService: PeriodService,
    private ringService: RingService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.getAllStudents();

    this.teacherService.getAllTeachers().subscribe(
      (response) => {
        console.log('Teachers response', response);
        this.teachers = response.data;
      },
      (error) => {
        console.error('Teachers failed', error);
      }
    );

    this.ringService.getAllRings().subscribe(
      (response) => {
        console.log('Rings response', response);
        this.rings = response.data;
      },
      (error) => {
        console.error('Rings failed', error);
      }
    );
  }

  rowSelected: any;

  private getAllStudents() {
    this.studentService.getAllStudent().subscribe(
      (response: any) => {
        console.log('Student response', response);
        this.data = response.data;
        this.rowSelected = this.data[0];
      },
      (error) => {
        console.error('Student failed', error);
      }
    );
  }
  selectRow(row: any) {
    this.rowSelected = row;
  }

  onSubmit() {
    console.log(this.student);
    this.studentService.addStudent(this.student).subscribe(
      (response) => {
        console.log(response);
        this.getAllStudents();

        this.closeModal(); // Close the modal after successful submission
      },
      (error) => {
        this.error = error;
        console.log(error);
      }
    );
  }

  prepareStudentData() {
    console.log('Fetching data.....');
  }

  reset() {
    this.student = {
      fullName: '',
      nationalId: '',
      motherName: '',
      address: '',
      motherPhoneNumber: '',
      maritalStatus: 'أعزب',
      periodName: '',
      ringId: 1,
      joiningDate: '',
      birthDate: '',
      fatherPhoneNumber: '',
      fatherEmailAddress: '',
    };
  }
  editStudent(student: any) {
    this.student = student;
    console.log('Edit Student : ', student);
  }
  deleteStudent(student: any) {
    this.studentService.deleteStudent(student.id).subscribe(
      (data) => {
        this.data = this.data.filter((studnt) => studnt.id !== student.id);
        console.log(data);
      },
      (error) => console.log(error)
    );
    console.log('Delete Student : ', student);
  }
  closeModal() {
    // Use Bootstrap's JavaScript API to close the modal
    const modalElement = this.studentModal.nativeElement;
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal?.hide();
  }
}
