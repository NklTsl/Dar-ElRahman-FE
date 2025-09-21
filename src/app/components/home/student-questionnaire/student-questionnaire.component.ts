import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RingService} from 'src/app/services/ring/ring.service';
import {QuestionnaireService} from 'src/app/services/questionnaire/questionnaire.service';
import {StudentService} from 'src/app/services/student/student.service';
import {StudentQuestionnaireService} from 'src/app/services/student-questionnaire/student-questionnaire.service';
import {Ring} from 'src/app/models/Ring.model';
import {Questionnaire} from 'src/app/models/Questionnaire.model';
import {Student} from 'src/app/models/Student.model';
import {Grade} from 'src/app/models/enums/Grade.enum';
import {StudentQuestionnaire} from 'src/app/models/StudentQuestionnaire.model';
import {QuestionType} from "../../../models/enums/QuestionType.enum.js";
import {QuestionnaireType} from "../../../models/enums/QuestionnaireType.enum";

@Component({
  selector: 'app-student-questionnaire',
  templateUrl: './student-questionnaire.component.html',
  styleUrls: ['./student-questionnaire.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class StudentQuestionnaireComponent implements OnInit {

  studentQuestionnaireForm: FormGroup;
  filterForm: FormGroup;
  rings: Ring[] = [];
  questionnaires: Questionnaire[] = [];
  students: Student[] = [];
  grades: string[] = Object.values(Grade);
  studentQuestionnaires: StudentQuestionnaire[] = [];

  rowSelected: any;

  constructor(
    private fb: FormBuilder,
    private ringService: RingService,
    private questionnaireService: QuestionnaireService,
    private studentService: StudentService,
    private studentQuestionnaireService: StudentQuestionnaireService
  ) {
    this.studentQuestionnaireForm = this.fb.group({
      ringId: ['', Validators.required],
      questionnaireId: ['', Validators.required],
      studentId: ['', Validators.required],
      grade: ['', Validators.required]
    });

    this.filterForm = this.fb.group({
      ringId: [''],
      questionnaireId: [''],
      studentId: ['']
    });
  }

  ngOnInit(): void {
    this.loadRings();
    this.loadStudentQuestionnaires();
    this.filterForm.valueChanges.subscribe(() => {
      this.filterStudentQuestionnaires();
    });
  }

  loadRings(): void {
    this.ringService.getAllRings().subscribe(
      (response: any) => {
        this.rings = response.data;
      },
      (error) => {
        console.error('Rings failed', error);
      });
  }

  onRingChange(event: Event): void {
    const ringId = Number((event.target as HTMLInputElement).value);
    if (ringId) {
      this.questionnaireService.getQuestionnairesByRingId(ringId).subscribe(
        (response: any) => {
          this.questionnaires = response.data;
          this.studentQuestionnaireForm.patchValue({questionnaireId: '', studentId: ''});
          this.students = [];
        },
        (error) => {
          console.error('Questionnaire by ringId failed', error);
        });
    } else {
      this.questionnaires = [];
      this.students = [];
    }
  }

  onQuestionnaireChange(event: Event): void {
    const questionnaireId = Number((event.target as HTMLInputElement).value);
    if (questionnaireId) {
      this.studentService.getStudentsNotInQuestionnaire(questionnaireId).subscribe(
        (response => {
          this.students = response.data;
          this.studentQuestionnaireForm.patchValue({studentId: ''});
        }),
        (error) => {
          console.error('Student questionnaire failed', error);
        });
    } else {
      this.students = [];
    }
  }

  loadStudentQuestionnaires(): void {
    this.studentQuestionnaireService.getAllStudentQuestionnaires().subscribe(
      (response: any) => {
        this.studentQuestionnaires = response.data;
        this.rowSelected = this.studentQuestionnaires?.at(0);
      },
      (error) => {
        console.error('Student questionnaire failed', error);
      }
    );
  }

  onSubmit(): void {
    if (this.studentQuestionnaireForm.valid) {
      this.studentQuestionnaireService.addStudentQuestionnaire(this.studentQuestionnaireForm.value).subscribe(() => {
        this.loadStudentQuestionnaires();
        this.studentQuestionnaireForm.reset();
      });
    }
  }

  filterStudentQuestionnaires(): void {
    const filterValues = this.filterForm.value;
    this.studentQuestionnaireService.filter(filterValues).subscribe(
      (response: any) => {
        this.studentQuestionnaires = response.data;
      },
      (error) => {
        console.error('Student questionnaire failed', error);
      });
  }

  protected readonly QuestionType = QuestionType;
  protected readonly QuestionnaireType = QuestionnaireType;
}
