import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssueItemComponent } from "../../components/issue-item/issue-item.component";
import { State } from '../../interfaces';

@Component({
  selector: 'app-issues-list-page',
  standalone: true,
  imports: [LabelsSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
})
export default class IssuesListPageComponent {

  inssuesServices = inject(IssuesService)

  get labelsQuery() { return this.inssuesServices.labelsQuery }
  get issuesQuery() { return this.inssuesServices.issuesQuery }

  onChangeState(newState:string){
    const state = {
      all: State.All,
      open: State.Open,
      closed: State.Closed
    }[newState] ?? State.All

    this.inssuesServices.showIssuesByStet(state)
  }

}
