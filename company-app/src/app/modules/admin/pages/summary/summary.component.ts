import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SummaryComponent { }
