import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeFacade } from '@resumefai/home/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main[app-home-feature]',
  standalone: true,
  styleUrls: ['./home-feature.component.scss'],
  templateUrl: './home-feature.component.html',
  imports: [FormsModule, NgFor],
})
export default class HomeFeatureComponent {
  facade = inject(HomeFacade);
}
