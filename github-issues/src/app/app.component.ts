import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import IssuesListPageComponent from "./modules/issues/pages/issues-list/issues-list-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IssuesListPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'github-issues';
}
