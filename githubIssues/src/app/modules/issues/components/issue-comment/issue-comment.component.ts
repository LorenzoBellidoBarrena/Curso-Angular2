import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubIssue } from '../../interfaces';

@Component({
  selector: 'issue-comment',
  imports: [],
  templateUrl: './issue-comment.component.html',
})
export class IssueCommentComponent {
  issue = input.required<GitHubIssue>();
 }
