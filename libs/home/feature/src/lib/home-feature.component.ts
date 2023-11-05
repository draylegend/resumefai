import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[app-home-feature]',
  standalone: true,
  styleUrls: ['./home-feature.component.scss'],
  templateUrl: './home-feature.component.html',
})
export default class HomeFeatureComponent {}
