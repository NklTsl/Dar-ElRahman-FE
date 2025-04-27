import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { SurahDateComponent } from '../surah-date/surah-date.component';

@Component({
  selector: 'app-question-dialog',
  imports: [MatDialogModule, SurahDateComponent],
  templateUrl: './question-dialog.component.html',
  styleUrl: './question-dialog.component.scss',
})
export class QuestionDialogComponent implements OnInit {

  quranQuestion = [
    {
      surah: "البقرة",
      date: "26/04/2025",
      rating: "جيد جدا"
    },
    {
      surah: "آل عمران",
      date: "30/03/2025",
      rating: "جيد جدا"
    },
    {
      surah: "النساء",
      date: "10/01/2025",
      rating: "جيد جدا"
    },
    {
      surah: "المائدة",
      date: "12/12/2024",
      rating: "ممتاز"
    },
    {
      surah: "الأنعام",
      date: "02/06/2024",
      rating: "جيد"
    },
    {
      surah: "الأعراف",
      date: "21/05/2024",
      rating: "ممتاز"
    },
    {
      surah: "هود",
      date: "26/02/2024",
      rating: "جيد جدا"
    }
  ]


  readonly dialogRef = inject(MatDialogRef<QuestionDialogComponent>);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { studentId: number | undefined }
  ) {}

  ngOnInit(): void {}
}
