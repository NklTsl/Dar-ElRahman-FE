import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(protected authService: AuthService) {}

}
