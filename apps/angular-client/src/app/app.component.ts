import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-root]',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export default class AppComponent {}
