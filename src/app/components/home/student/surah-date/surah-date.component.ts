import { Component, input } from '@angular/core';

@Component({
  selector: 'app-surah-date',
  imports: [],
  templateUrl: './surah-date.component.html',
  styleUrl: './surah-date.component.scss'
})
export class SurahDateComponent {
  surah = input('--');
  date = input('--');
  rating = input('--');
}

